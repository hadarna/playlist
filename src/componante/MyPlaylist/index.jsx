import { useContext } from "react"
import { playlistContext } from "../Layout";
import Playlist from "../Playlist";
import styles from "./style.module.css"

export default function MyPlaylist() {
    const { list } = useContext(playlistContext);

    return (
        <div className={styles.myPlaylist}>
            <ul>{Object.keys(list).map((v) => <li><Playlist key={v} playlist={v} /></li>)}</ul>



        </div>
    )
}