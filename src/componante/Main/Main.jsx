import SongList from "../../pages/SongList/SongList";


export default function Main(props) {
    return (

        <div>
            <SongList songs={props.songs} />
        </div>
    )
}