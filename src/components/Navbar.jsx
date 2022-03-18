import ReactLogo from "../images/logo.png"

export default function Navbar(){
    return(
        <nav className="nav">
            <img src={ReactLogo} className="logo" alt="ReactLogoImg"></img>
            <h3 className="navLogoText">React Facts</h3>
            <h4 className="navDescriptionText">React Course - Project 1</h4>
        </nav>
    )
}