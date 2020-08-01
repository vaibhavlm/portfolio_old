import React, { useState } from 'react'
import { Nav, Navbar, NavbarToggler, NavbarBrand, Collapse, NavItem} from 'reactstrap'
import { NavLink} from 'react-router-dom';


const Header = ()=>{
     const [isNav , toggleNav] = useState(false);

     
 
  return(
      <React.Fragment>
          <Navbar  className="site-navbar bg-light" dark expand="md">
              <div className="container">
              <NavbarBrand className="navbar-brand" href="/">portfolio</NavbarBrand>   
              <NavbarToggler onClick={()=> toggleNav(!isNav)} />
              <Collapse isOpen={isNav} navbar>
                  <Nav className="navbar-nav" navbar>
                   <NavItem>
                   <NavLink className="nav-link" activeClassName="active" exact={true} to='/home'>Home</NavLink>
                   </NavItem>
                   <NavItem>
                       <NavLink className="nav-link"  to='/aboutme'>AboutMe</NavLink>
                   </NavItem>
                   <NavItem>
                       <NavLink className="nav-link" to='/certificate'>Certifications</NavLink>
                   </NavItem>
                   <NavItem>
                       <NavLink className="nav-link" to='/contact'>Resume</NavLink>
                   </NavItem>
                  </Nav>
              </Collapse>
              </div>
          </Navbar>
      </React.Fragment>
     
  );
    
}


export default Header;