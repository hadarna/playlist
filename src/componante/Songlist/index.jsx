import Song from "../Song"
import { Link } from "react-router-dom"


export default function SongList(props) {
    return (
        <div>
            {props.songs.map((v) => {
                return <Song key={v.id} song={v.title} artist={v.channel.name} duration={v.duration} image={v.thumbnail.url} />
            })}
            <span><Link to={"/home"}>home</Link></span>
        </div>

    )
}
