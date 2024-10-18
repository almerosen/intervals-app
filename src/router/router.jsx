import { createBrowserRouter } from "react-router-dom";
import { LoadingScreen } from "../components/LoadingScreen/LoadingScreen";
import { SetTimer } from "../components/SetTimer/SetTimer";
import { DigitalTimer } from "../components/DigitalTimer/DigitalTimer";
import { AlarmView } from "../components/AlarmView/AlarmView";
import { PausScreen } from "../components/PausScreen/PausScreen";

function isProduction() {
    console.log(import.meta.env)

    if (import.meta.env.PROD) return  { basename: "/intervals-app" }
    else return {}
}

// const isProduction = process.env.NODE_ENV === 'production'

const router = createBrowserRouter(
    [
        {
            path: "/", 
            element: <LoadingScreen />
        },
        {
            path: "/setTimer",
            element: <SetTimer />
        },
        {
            path: "digital-timer",
            element: <DigitalTimer />
        },
        {
            path: "alarm-view",
            element: <AlarmView />
        },
        {
            path: "paus",
            element: <PausScreen />
        }
    ], 
    isProduction()
    // { basename: isProduction ? "/intervals-app" : "/" }
)

export default router