import { useContext, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";


export default function Register({ setIsLogin }) {

    const navigate = useNavigate();

    function checkStatus(status) {
        if (status === 200) {
            alert("You have successfully registered! Wellcome 🤩")
            setIsLogin(true)
            navigate("/")
        }
        else {
            alert("This email is already registered in the system. Try again!")
        }
    }


    const [newUser, setNewUser] = useState({})
    const setField = (field, value) => {
        setNewUser({ ...newUser, [field]: value })
    }

    const [isExist1, setIsExist1] = useState(true)
    const [isExist2, setIsExist2] = useState(true)
    const [isExist3, setIsExist3] = useState(true)
    const [isExist4, setIsExist4] = useState(true)

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(newUser)
        fetch("http://localhost:4000/api/register", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                'Content-Type': "application/json"
            }
            // 
        }).then((response) => (checkStatus(response.status)))


    }

    const isValid1 = (e) => {
        setIsExist1(!e.target.value)
        setField("fname", e.target.value)
    }
    const isValid2 = (e) => {
        setIsExist2(!e.target.value)
        setField("lname", e.target.value)
    }
    const isValid3 = (e) => {
        setIsExist3(!e.target.value)
        setField("email", e.target.value)
    }
    const isValid4 = (e) => {
        setIsExist4(!e.target.value)
        setField("password", e.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="string" name="fName" pattern="^[a-zA-Z]+$" required placeholder="First Name" onChange={isValid1} /><br />
            <input type="string" name="lName" pattern="^[a-zA-Z]+$" required placeholder="Last Name" onChange={isValid2} /><br />
            <input type="string" name="email" required placeholder="Email" onChange={isValid3} /><br />
            <input type="password" name="password" required placeholder="Password" onChange={isValid4} /><br />
            <label name="birthDay">Date of Birth:</label><br />
            <input type="date" name="birthDay" /><br />
            <input type="submit" value="Register" disabled={isExist1 || isExist2 || isExist3 || isExist4} />

        </form>
    )
}