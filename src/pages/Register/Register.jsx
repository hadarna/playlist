import { useContext, useState } from "react";
import { userContext } from "../../componante/Layout/Layout";



export default function Register() {

    const { user, setUser } = useContext(userContext);
    const fictiveUser = user;

    const [isExist1, setIsExist1] = useState(true)
    const [isExist2, setIsExist2] = useState(true)
    const [isExist3, setIsExist3] = useState(true)
    const [isExist4, setIsExist4] = useState(true)

    const onSubmit = (e) => {
        e.preventDefault();
    }

    const isValid1 = (e) => {
        setIsExist1(!e.target.value)
    }
    const isValid2 = (e) => {
        setIsExist2(!e.target.value)
    }
    const isValid3 = (e) => {
        setIsExist3(!e.target.value)
    }
    const isValid4 = (e) => {
        setIsExist4(!e.target.value)
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
