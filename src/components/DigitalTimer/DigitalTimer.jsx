import { useDispatch, useSelector } from "react-redux";
import "./DigitalTimer.css"
import { useNavigate } from "react-router-dom";
import { stopTimer } from "../../store/timerSlice";
import { useEffect } from "react";

export const DigitalTimer = () => {
    const timeValues = useSelector((state) => state.timer.timeValues)
    const isRunning = useSelector((state) => state.timer.isRunning)
    const intervalsEnabled = useSelector((state) => state.timer.intervalsEnabled)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (timeValues === "00:00:00" && !isRunning) {
            navigate("/alarm-view")
        }
    }, [timeValues, isRunning, navigate])

    const handleAbortTimer = () => {
        dispatch(stopTimer())
        navigate("/setTimer")
    }

    return (
        <div className="digital-timer-page">
            <div className="digital-timer" style={{color: "white"}}>
                <h2 className="digital-timer-text">{timeValues}</h2>
                {intervalsEnabled && <p style={{textAlign: "center"}}>intervals (starts over when reaching zero)</p>}
            </div>
            <button 
                className="abort-timer-button"
                onClick={handleAbortTimer}>ABORT TIMER</button>
        </div>
    )
}