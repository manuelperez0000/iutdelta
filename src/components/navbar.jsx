import { Link } from "react-router-dom"
import logo2 from '../img/logo2.png'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
            <div className="navbar-brand">
                <img src={logo2} className='logo' alt="" />
            </div>
            <div className="">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/registro">
                            Registro
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/control">
                            Control
                        </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/reporte">
                            Reporte
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
}

export default Navbar