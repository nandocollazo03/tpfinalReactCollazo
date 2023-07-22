import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    const logoNaturalia = "../../img/logo_naturalia.png";
    return (
        <header>
            <Link to={"/"}>
                <img className="imgNaturalia" src={logoNaturalia} alt="" />
            </Link>

            <nav>
                <ul className="navbar">
                    <li><NavLink to={"/categoria/1"}>Limpieza natural</NavLink></li>
                    <li><NavLink to={"/categoria/2"}>Cocina eco</NavLink></li>
                    <li><NavLink to={"/categoria/3"}>Ropa orgánica</NavLink></li>
                </ul>
            </nav>

            <CartWidget />

        </header>
    )
}

export default NavBar