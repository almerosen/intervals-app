import { createSlice } from "@reduxjs/toolkit";
import Timer from "easytimer.js";
const timer = new Timer()

const initialState = {
    timeValues: "00:00:00",
    isRunning: false,
    intervalsEnabled: false,
    isBreak: false,
    fiveMinBreakEnabled: false
}

const timerSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
        startTimer(state, action) {
            const { minutes, intervals, fiveMinBreakEnabled } = action.payload

            if (!state.isRunning) {

                state.minutes = minutes
                state.intervalsEnabled = intervals
                state.fiveMinBreakEnabled = fiveMinBreakEnabled

                timer.start({
                    startValues: { minutes: minutes },
                    countdown: true,
                    target: { minutes: 0, seconds: 0}

                })

                state.isRunning = true

            
            }
        },
        pauseTimer(state) {
            if (state.isRunning) {
                timer.pause()
                state.isRunning = false
            }
        },
        resetTimer(state) {
            timer.reset()
            // timer.stop()
            state.timeValues = "00:00:00"
            state.isRunning = false
        },
        updateTimer(state) {
            state.timeValues = timer.getTimeValues().toString()
        },
        stopTimer(state) {
            timer.stop()
            state.timeValues = "00:00:00"
            state.isRunning = false
        },
        setBreak(state, action) {
            state.isBreak = action.payload
        },
        startBreak(state) {
            console.log("Starting 5 min break")

            timer.reset()
            state.timeValues = "00:05:00",
            
            timer.start({
                startValues: { minutes: 5 },
                countdown: true,
                target: { minutes: 0, seconds: 0 }
            })

            state.isRunning = true
            
        }
    },
})

export const { startTimer, pauseTimer, resetTimer, updateTimer, stopTimer } = timerSlice.actions


export const setupTimerListeners = (dispatch, getState, navigate) => {

    timer.addEventListener("secondsUpdated", () => {
        dispatch(timerSlice.actions.updateTimer())
    })

    timer.addEventListener("targetAchieved", () => {
        console.log("reached zero")

        const state = getState().timer
        console.log("state:", state)

        if (state.intervalsEnabled) {
            if (state.fiveMinBreakEnabled && !state.isBreak) {
                console.log("fiveMinBreakEnabled:", state.fiveMinBreakEnabled)
                console.log("!isBreak:", state.isBreak)
                // Startar 5 min paus
                dispatch(timerSlice.actions.stopTimer())
                dispatch(timerSlice.actions.setBreak(true))

                const updatedState = getState().timer
                console.log("isBreak should now be true", updatedState.isBreak)

                if (updatedState.isBreak) {
                    dispatch(timerSlice.actions.startBreak())
                    setTimeout(() => {
                        navigate("/paus");
                    }, 500);
                }
                // dispatch(timerSlice.actions.startBreak())
                // navigate("/paus")
            } else if (state.isBreak) {
                // om i paus, starta om timern
                dispatch(timerSlice.actions.stopTimer())
                dispatch(timerSlice.actions.setBreak(false))

                dispatch(timerSlice.actions.startTimer(
                    { 
                        minutes: state.minutes, 
                        intervals: state.intervalsEnabled, 
                        fiveMinBreakEnabled: state.fiveMinBreakEnabled 
                    }
                ))
                
                navigate("/digital-timer")
            } else {
                // Om intervals men ingen paus, starta om timern direkt
                dispatch(timerSlice.actions.stopTimer())
                dispatch(timerSlice.actions.startTimer({ 
                    minutes: state.minutes, 
                    intervals: state.intervalsEnabled, 
                    fiveMinBreakEnabled: state.fiveMinBreakEnabled }))
            }
        } else {
            // Om ej intervals, stoppa timern när den når 0
            dispatch(timerSlice.actions.stopTimer())
        }
                
       

        // if (state.intervalsEnabled) {
        //     dispatch(timerSlice.actions.stopTimer()) 
        //     dispatch(timerSlice.actions.startTimer({ minutes: state.minutes, intervals: state.intervalsEnabled }))
        // } else {
        //     dispatch(timerSlice.actions.stopTimer())
        // }

        // dispatch(timerSlice.actions.startTimer({ minutes: 1}))
    })
}

export default timerSlice.reducer