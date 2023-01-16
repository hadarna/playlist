import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

export default function Login({ setIsLogin }) {

    const navigate = useNavigate()

    const [user, setUser] = useState({})

    const setField = (field, value) => {
        setUser({ ...user, [field]: value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/api/login', user)
            .then((res => {
                if (res.status == 200) {
                    alert("You have successfully login! Wellcome 🤩")
                    setIsLogin(true)
                    localStorage.token = res.data
                    navigate("/")
                }
                else {
                    alert("error")
                }
            }))
            .catch(() => setIsLogin(false))
    }

    const [isDisabled1, setisDisabled1] = useState(true);
    const [isDisabled2, setisDisabled2] = useState(true);

    function isValid1(e) {
        setisDisabled1(!e.target.value)
        setField("email", e.target.value)
    }
    function isValid2(e) {
        setisDisabled2(!e.target.value)
        setField("password", e.target.value)
    }

    return (

        <form onSubmit={onSubmit}>
            <h1 id="wellcome">Wellcome to My playlist!</h1>
            <input type="string" name="email" required placeholder="Email" onChange={isValid1} />
            <input type="password" name="password" required placeholder="password" onChange={isValid2} />
            <input type="submit" value="Login" disabled={isDisabled1 || isDisabled2} />
            <div>
                <p>Not registered yet?</p>
                <button><Link to={"/register"}>Register</Link></button>
            </div>

        </form>
    )
}