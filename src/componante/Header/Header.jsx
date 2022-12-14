import "./Header.css"
import { Link } from "react-router-dom"

export default function Header(props) {
    return (
        <header id="header">
            <span id="connect"><Link to={"/login"}>👤</Link></span>
            <span id="myPlaylist">My Playlist</span>
            <input type="search" onInput={(e) => props.onSearch(e.target.value)} placeholder="search.." />
            <img src='https://www.emojiall.com/images/240/emojitwo/1f3b5.png' alt="music" height="80px" />
        </header >


    )



}