import logo from "../Assets/logo.png";
import { NavLink, Outlet } from "react-router-dom";
import navStyles from "../styles/Navbar.module.css"

const Navbar = () => {
  
    return (
        <>
        <div className={navStyles.navbarContainer}>
            <div className={navStyles.navBarLogo}>
                <NavLink to="/">
                    <img src={logo} alt="logo" className={navStyles.logoImage} />
                </NavLink>
            </div>

            <div className={navStyles.navBarlinks}>
                <ul>
                    <li>
                        <NavLink activeClassName={navStyles.activeLink} to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={navStyles.activeLink} to='/detailspage'>
                            Your Habits
                        </NavLink>
                    </li>
                </ul>
            </div>
           
        </div>
        
         <Outlet />
         </>
    );
};

export default Navbar;
