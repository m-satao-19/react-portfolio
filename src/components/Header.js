import React, { Component } from 'react';
import {Nav, Navbar, NavbarBrand, NavbarToggler, NavLink, Collapse, NavItem, Jumbotron} from 'reactstrap';

class Header extends Component{
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar dark expand="md" className='navbar-dark fixed-top'>
                    <div className='container'>
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className="mr-auto">Welcome</NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Education</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Skills</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Co-Curricular</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Hobbies</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Contact</NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className='container'>
                        <div className='row row-content'>
                            <div className='col-12 col-sm-3'>
                                <img src='assets/images/photo.jpeg' height='200' width='200' alt='Image' /><br/><br/>
                            </div>
                            <div className='col-12 col-sm-6'>
                                <h1>Madhura Satao</h1><br/>
                                <p>D.O.B: 19 April 1998</p>
                                <p>Seeking an opportunity in a challenging environment where I can deliver my best with my technical
                                    knowledge and to enhance more my skills that can be utilized for the overall development of an
                                    organisation.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;