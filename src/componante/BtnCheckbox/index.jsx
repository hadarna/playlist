import { useContext, useState } from "react"
import { playlistContext } from "../Layout";
import styles from "./style.module.css"


export default function BtnCheckbox(props) {
    const { list } = useContext(playlistContext);


    const isExist = list[props.playlistName].includes(props.song);

    return (
        <div className={styles.ckeckbox} onClick={(e) => props.handle(e.target.id)}>
            <input className={styles.box} type="checkbox" id={props.playlistName} checked={isExist} onChange={(e) => props.handle(e.target.id)} />
            <label className={styles.label} for={props.playlistName}>{props.playlistName}</label>
        </div>
    )

}
