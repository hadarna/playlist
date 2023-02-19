import { useState } from "react"
import AddPlaylist from "../AddPlaylist"
import styles from "./style.module.css"
import { MdPlaylistAdd, MdPlayArrow } from "react-icons/md"

export default function Song(props) {

    const [chooseList, setChooseList] = useState(false)


    return (
        <div className={styles.oneSong}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={props.image} alt={props.song} id="songImg" />
                <div className={styles.play}><MdPlayArrow /></div>
            </div>

            <div className={styles.details}>
                <div> <div className={styles.songName}>{props.song}</div>
                    <div className={styles.songArtist}>{props.artist}</div>
                    <div className={styles.songDuration}>{props.duration}</div></div>
                <button className={styles.add} onClick={() => setChooseList(!chooseList)}> <MdPlaylistAdd /></button>
            </div>
            {chooseList && <AddPlaylist song={props.song} chooseList={chooseList} setChooseList={setChooseList} key={props.id} />}
        </div>

    )
}