import { useState } from "react"
import AddPlaylist from "../AddPlaylist"
import styles from "./style.module.css"

export default function Song(props) {

    const [chooseList, setChooseList] = useState(false)

    return (
        <div className="oneSong">
            <div className={styles.songName}>{props.song}</div>
            <div className={styles.songArtist}>{props.artist}</div>
            <div className={styles.songDuration}>{props.duration}</div>
            <img src={props.image} alt={props.song} id="songImg" />
            <button onClick={() => setChooseList(!chooseList)}>Add to Playlist</button>
            {chooseList && <AddPlaylist song={props.song} chooseList={chooseList} setChooseList={setChooseList} key={props.id} />}
        </div>

    )
}