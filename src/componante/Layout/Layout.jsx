import axios from "axios";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../../pages/Login/LogIn";
import Home from "../../pages/Home/Home";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Register from "../../pages/Register/Register";
import { createContext } from "react";

export const userContext = createContext();
export const playlistContext = createContext();



export default function Layout() {
    const [songs, setSongs] = useState([]);
    const [user, setUser] = useState({});
    const [list, setList] = useState([]);
    const [isLogin, setIsLogin] = useState(false)


    const searchSongs = (value) => {
        if (value) {

            const options = {

                params: { query: value, safesearch: 'false' },
                headers: {
                    'X-RapidAPI-Key': '217710aa90mshaf6a8b35f51ab0dp1b0b99jsnb93ff2b3a8fd',
                    'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
                }
            };

            axios.get('https://simple-youtube-search.p.rapidapi.com/search', options).then(function (response) {
                console.log(response.data);
                setSongs(response.data.results)
            }).catch(function (error) {
                console.error(error);
            });
        }
    }

    return (
        <>
            <userContext.Provider value={{ user, setUser }}>
                <playlistContext.Provider value={{ list, setList }}>
                    <Header onSearch={searchSongs} />
                    <Routes>
                        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
                        <Route path="/register" element={<Register setIsLogin={setIsLogin} />} />
                        {isLogin && <>
                            <Route path="/" element={<Navigate to="/Home" />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/results" element={<Main songs={songs} />} />
                            <Route path="*" element={<Navigate to="<Home" />} />
                        </>}
                    </Routes>
                </playlistContext.Provider>
            </userContext.Provider>
            {console.log(list)}
        </>

    )
}