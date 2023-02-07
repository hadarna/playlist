import { useContext } from "react"
import { playlistContext } from "../Layout";


export default function BtnCheckbox(props) {
    const { list } = useContext(playlistContext);

    let isExist = list[props.playlistName].includes(props.song)

    return (
        <div onClick={(e) => props.handle(e.target.id)}>
            <input type="checkbox" id={props.playlistName} checked={isExist} />
            <label for={props.playlistName}>{props.playlistName}</label>
        </div>
    )

}
