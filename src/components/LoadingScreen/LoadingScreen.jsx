import "./LoadingScreen.css"
import { useNavigate } from "react-router-dom"
import logo from "../../assets/logo.svg"

export const LoadingScreen = () => {
    const navigate = useNavigate()
    return (
        <div className="loadingScreen-container">
            <div className="logo-container" onClick={() => navigate("/setTimer")}>
                <img src={logo} alt="logo" className="logo"/>
                <p className="slogan">For all your timing needs</p>
            </div>
        </div>
    )
}