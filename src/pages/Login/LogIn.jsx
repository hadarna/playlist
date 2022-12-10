import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {

    const onSubmit = (e) => {
        e.preventDefault();
    }
    const [isDisabled1, setisDisabled1] = useState(true);
    const [isDisabled2, setisDisabled2] = useState(true);

    function isValid1(e) {
        setisDisabled1(!e.target.value)
    }

    function isValid2(e) {
        setisDisabled2(!e.target.value)
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