import styles from "./style.module.css"
import { Link, useNavigate } from "react-router-dom"
import { HiOutlineUser } from "react-icons/hi"
import { GoSearch } from "react-icons/go"
import { useState } from "react"


export default function Header(props) {
    const navigate = useNavigate()

    function onInput(e) {
        props.onSearch(e.target.value)
        navigate("/results")

    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <span className={styles.img}> <img src='https://krosbits.in/images/musicolet_round.png' alt="music" height="70px" /></span>
                <span className={styles.myMusic}>My Music</span></div>
            <div className={styles.nav}>
                <span className={styles.connect}><Link to={"/login"}><HiOutlineUser /></Link></span>

                <div className={styles.input}><input type="search" onInput={(e) => onInput(e)} placeholder="search.." />
                    <i className={styles.search}><GoSearch /></i>
                </div></div>
        </header >


    )



}