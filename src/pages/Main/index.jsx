import Songlist from "../../componante/Songlist";


export default function Main(props) {
    return (

        <div>
            <Songlist songs={props.songs} />
        </div>
    )
}