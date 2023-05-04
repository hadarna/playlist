import Song from "../Song"
import { Link } from "react-router-dom"
import styles from "./style.module.css"


export default function Songlist(props) {
    return (
        <div className={styles.songs}>
            {props.songs.map((v) => {
                return <Song key={v.id} song={v.title} artist={v.channel.name} duration={v.duration_formatted
                } image={v.thumbnail.url} />
            })}
            {/* <span><Link to={"/home"}>home</Link></span> */}
        </div>

    )
}
