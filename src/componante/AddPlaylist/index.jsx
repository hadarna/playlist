import { useContext, useState } from "react"
import BtnCheckbox from "../BtnCheckbox";
import { playlistContext } from "../Layout";
import styles from "./style.module.css"
import { IoMdAdd, IoMdClose } from "react-icons/io"


export default function AddPlaylist({ song, chooseList, setChooseList, key }) {
    const { list, setList } = useContext(playlistContext);
    const [newPlaylist, setNewPlaylist] = useState(false)
    const [newName, setNewName] = useState("")

    let playlists = Object.keys(list)


    // function newPlaylist() {
    //     const newList = prompt("Write the new playlist name")
    //     setList({ ...list, [newList]: [song] })
    // }

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
        <div className={styles.container} onClick={() => setChooseList(false)}>
            <div className={styles.list} onClick={(e) => e.stopPropagation()}>
                <div className={styles.save}>Save to...</div>
                <button className={styles.close} onClick={() => setChooseList(!chooseList)} ><IoMdClose /></button>
                <div className={styles.playlists}>{playlists.map((key) => <BtnCheckbox playlistName={key} song={song} handle={handle} key={key} />)}</div>

                {!newPlaylist ?
                    <button className={styles.new} onClick={() => setNewPlaylist(true)}><IoMdAdd /> Create new playlist</button> :
                    <div className={styles.playlistName}>
                        <label for="name" className={styles.nameLabel}>Name</label>
                        <input className={styles.name} type="text" id="name" placeholder="Enter playlist name..." />
                        <button className={styles.create} >Create</button>
                    </div>}
                {console.log(list)}
            </div>
        </div>
    )
}
