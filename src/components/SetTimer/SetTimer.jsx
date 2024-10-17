import "./SetTimer.css"
import decrement from "../../assets/decrement.svg"
import increment from "../../assets/increment.svg"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector, useStore } from "react-redux"
import { resetTimer, startTimer, setupTimerListeners } from "../../store/timerSlice"




export const SetTimer = ()  => {
    
    const [minutes, setMinutes] = useState(0)
    const [intervals, setIntervals] = useState(false)
    const [fiveMinBreak, setfiveMinBreak] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const store = useStore()

    useEffect(() => {
        setupTimerListeners(dispatch, store.getState, navigate)
    }, [dispatch, store, navigate])

    const handleDecrease = () => {
        if (minutes > 1) setMinutes(prevState => prevState - 1)
    }

    const handleIncrease = () => {
        setMinutes(prevstate => prevstate + 1)
    }

    const handleSubmit = () => {
        // dispatch(resetTimer())
        console.log("submitted values:", {minutes: minutes, intervals: intervals, fiveMinBreakEnabled: fiveMinBreak})
        dispatch(
            startTimer({
                minutes,
                intervals,
                fiveMinBreakEnabled: fiveMinBreak
            })
        )
        navigate("/digital-timer")

    }

    return (
        <div className="setTimerScreen-container">
            <div className="setTimer-container">
                <img 
                    src={decrement} 
                    alt="decrement-logo" 
                    className="increment-decrement-logo" 
                    // style={{height: "27px"}} 
                    onClick={handleDecrease}
                />
                <div className="minutes-container">
                    <p className="minutes-text">{minutes}</p>
                    <p className="minutes-small-text">minutes</p>
                </div> 
                <img 
                    src={increment} 
                    className="increment-decrement-logo" 
                    // style={{height: "27px"}}
                    onClick={handleIncrease}
                />
            </div>

            <div className="interval-container">
                <div className="checkbox-interval">
                    <input 
                            type="checkbox"
                            checked={intervals}
                            onChange={() => setIntervals(!intervals)}    
                        />
                        <label style={{marginLeft: "10px"}}>intervals</label> 
                </div>   
                <div className="checkbox-interval">
                    <input 
                        type="checkbox"
                        checked={fiveMinBreak}
                        onChange={() => setfiveMinBreak(!fiveMinBreak)}  
                    />
                    <label style={{marginLeft: "10px"}}>5 min break / interval</label>
                </div>       
            </div>

            <button 
                className="start-button" 
                onClick={handleSubmit}
                >
                    START TIMER
            </button>
        </div>
    )
}