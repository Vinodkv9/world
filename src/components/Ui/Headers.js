import React, { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from 'react-router-dom';


const Headers = () => {
   const [show, setShow] = useState(false);

   const handleButtonToggle = () => {
     return setShow(!show);
   };
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="Logo">
            <NavLink to="/">
              <h1>WorldAtlas</h1>
            </NavLink>
          </div>

          <nav className={show ? "menu-mobile" : "menu-web"}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/country">Country</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>

          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>

    // <>
    //      <Navbar bg="dark" data-bs-theme="dark">
    //       <Container
    //         fluid
    //         className="d-flex justify-content-evenly align-items-center me-auto"
    //       >
    //         <Navbar.Brand href="#home">WorldAtlas</Navbar.Brand>
    //         <Nav>
    //           <Nav.Link href="#home">Home</Nav.Link>
    //           <Nav.Link href="#country">Country</Nav.Link>
    //           <Nav.Link href="#about">About</Nav.Link>
    //           <Nav.Link href="#contact">Contact</Nav.Link>
    //         </Nav>
    //       </Container>
    //     </Navbar>

    // </>
  );
}

export default Headers  