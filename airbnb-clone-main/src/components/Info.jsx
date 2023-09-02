import photo_info from "../assets/photo-grid.png"
import './Info.css'
function Info() {
    return (
        <div className = "info">
            <img src = {photo_info} className = "info-pic" />
            <h1 className = "info-title"> Online Experiences </h1>
            <p className = "info-text"> Join unique interactive activities led be one-of-a-kind hosts - all without leaving home.</p>
        </div>
    )
}

export default Info;
