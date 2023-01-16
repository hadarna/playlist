import { useContext, useState } from "react"
import { playlistContext } from "../Layout/Layout";

export default function AddPlaylist({ song }) {

    const { list, setList } = useContext(playlistContext);

    function add(song) {
        setList([...list, song])
    }

    function remove(song) {
        setList(list.filter((v) => v.song !== song.song))
    }
    let found = list.find(v => v.song == song.song)
    return (
        (found) ? (
            <button className="add" onClick={() => (remove(song))}>Remove from playlist</button>
        ) : (

            <button className="add" onClick={() => (add(song))}>Add to playlist</button>
        ))

}