import './Card.css'
import star_photo from '../assets/star.png'


function Card (props) {
    let badgeText 
    if (props.openSpot === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location.toLowerCase() === "online"){
        badgeText = "ONLINE"
    }
    return (
        <div className = "card"> 
            <img src = {`src/assets/card/${props.image}`} className = "card-image" /> 
            {badgeText  && <div className = "card-badge"> {badgeText}</div>}
            <div className = "card-stats"> 
                <img src= {star_photo} className="card-star" />
                <span>  &nbsp; {props.rate}</span>
                <span className = "card-count"> ({props.count}) • &nbsp; </span>
                <span className = "card-location"> {props.location} </span>
            </div>
            <p className = "card-info"> {props.info} </p>
            <p> <span className = "bold"> From {props.price}</span> /person </p>
        </div>
    )
}

export default Card;