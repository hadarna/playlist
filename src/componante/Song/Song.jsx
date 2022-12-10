

export default function Song(props) {
    return (
        <div className="oneSong">
            <div id="songName">{props.song}</div>
            <div id="songArtist">{props.artist}</div>
            <div id="songDuration">{props.duration}</div>
            <img src={props.image} alt={props.song} id="songImg" />

        </div>)
}