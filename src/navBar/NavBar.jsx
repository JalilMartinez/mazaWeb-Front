import { Link, NavLink } from 'react-router-dom';
import '../styles/navBar.css'

export const NavBar = () => {
    return (
       <nav className="nav">
            <div className='nav-logo'></div>
            <div className='nav-links'>
                <div className='links-left'>
                    <Link className="nav-link" to="/mazaWeb-Front" >Presentacion</Link>
                    <Link className="nav-link" to="/mazaWeb-Front/myProyects" >Mis proyectos</Link>
                </div>
                <div className='links-Right'>
                    <Link className="nav-link" to="/mazaWeb-Front" >Login</Link>
                </div>
            </div>
       </nav>
    )
}
