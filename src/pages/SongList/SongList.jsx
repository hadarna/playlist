import Song from "../../componante/Song/Song"


export default function SongList(props) {
    return (
        <div>
            {props.songs.map((v) => {
                return <Song key={v.id} song={v.title} artist={v.channel.name} duration={v.duration} image={v.thumbnail.url} />
            })}
        </div>
    )
}