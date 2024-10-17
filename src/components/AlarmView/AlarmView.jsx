import "./AlarmView.css"
import alarmIcon from "../../assets/alarmIcon.svg"
import { useNavigate } from "react-router-dom"

export const AlarmView = () => {
    const navigate = useNavigate()

  
    return (
        <div className="alarmView-container">
            <div className="ellipses">
                <div className="ellipse-4"></div>

                <div className="ellipse-3"></div>

                <div className="ellipse-2"></div>
                <div className="ellipse-1"></div>

            </div>
            <div className="alarm-icon-container">
                <img src={alarmIcon} alt="alarm-icon" />
                <h2>Time's up!</h2>
            </div>

            <button 
                className="set-new-timer-button"
                onClick={() => navigate("/setTimer")}
            >SET NEW TIMER
            </button>
        </div>
    )
}