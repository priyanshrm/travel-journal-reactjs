import locImg from '../assets/location-symbol.png';
export default function Card(props){
    return (
        <div className="card">
            <img src={props.imageUrl} className="card--img"></img>
            <div className="card--text">
                <div className="card--text--top">
                    <img src={locImg}></img>
                    <p>{props.location}</p>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2>{props.title}</h2>
                <p className='card--text--date'>{props.startDate} - {props.endDate}</p>
                <p className='card--text--desc'>{props.description}</p>
            </div>

        </div>
    )
}