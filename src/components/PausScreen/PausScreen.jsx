import "./PausScreen.css"
import { useSelector } from "react-redux" 

export const PausScreen = () => {
    const timeValues = useSelector((state) => state.timer.timeValues)

    return (
        <div className="paus-page-container">
            <h1>paus screen</h1>
            <h2>{timeValues}</h2>
        </div>
       
    )
}