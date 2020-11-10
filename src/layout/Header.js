import React, {useState, useContext} from 'react'
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText
} from 'reactstrap'
import {Link} from 'react-router-dom'
import {UserContext} from '../context/UserContext'

const Header = () => {
    const context = useContext(UserContext);

    const [isOpen, SetIsOpen] = useState(false);

    const toggle = () => SetIsOpen(!isOpen)

    return (
        <Navbar color="info" light expand="md">
            <NavbarBrand>
                <Link to="/" className="text-white text-decoration-none">Github Search App</Link>
            </NavbarBrand>
            <NavbarText className="text-white">
                {
                    context.user?.email ? context.user.email : ""
                }
            </NavbarText>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {
                        context.user ? (
                            <NavItem>
                                <NavLink 
                                onClick={() => {
                                    context.setUser(null);
                                    // localStorage.removeItem('GithubSearchUserData');
                                }} 
                                className="text-white text-decoration-none" style={{cursor: "pointer"}}
                                >
                                    Logout
                                </NavLink>
                            </NavItem>
                        ) : (
                            <>
                                <NavItem>
                                <NavLink to="/signup" tag={Link} className="text-white text-decoration-none">
                                        Sign Up
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink to="/signin" tag={Link} className="text-white text-decoration-none">
                                        Sign In
                                    </NavLink>
                                </NavItem>
                            </>
                        )
                    }
                    
                    
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default Header;