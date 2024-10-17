import { createBrowserRouter } from "react-router-dom";
import { LoadingScreen } from "../components/LoadingScreen/LoadingScreen";
import { SetTimer } from "../components/SetTimer/SetTimer";
import { DigitalTimer } from "../components/DigitalTimer/DigitalTimer";
import { AlarmView } from "../components/AlarmView/AlarmView";
import { PausScreen } from "../components/PausScreen/PausScreen";

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
    { basename: "/intervals-app" }
)

export default router