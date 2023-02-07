import { useContext, useState } from "react"
import BtnCheckbox from "../BtnCheckbox";
import { playlistContext } from "../Layout";
import styles from "./style.module.css"


export default function AddPlaylist({ song, chooseList, setChooseList, key }) {
    const { list, setList } = useContext(playlistContext);

    let playlists = Object.keys(list)



    function newPlaylist() {
        const newList = prompt("Write the new playlist name")
        setList({ ...list, [newList]: [song] })
    }

    function handle(e) {
        if (!list[e].includes(song)) {
            setList({ ...list, [e]: [...list[e], song] })
        }
        else {
            setList({ ...list, [e]: [...list[e].filter((v) => v != song)] })
        }
        console.log(list)
    }

    return (
        <div className={styles.container}>
            <div className={styles.list}>
                <button onClick={() => setChooseList(!chooseList)} >X</button>
                {playlists.map((key) => <BtnCheckbox playlistName={key} song={song} handle={handle} key={key} />)}
                <button onClick={newPlaylist}>+ Add to new playlist</button>
                {console.log(list)}
            </div>
        </div>
    )
}