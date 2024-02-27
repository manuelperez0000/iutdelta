import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
            <div className="navbar-brand">UTDelta</div>
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