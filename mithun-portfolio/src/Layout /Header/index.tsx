import { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [ddValue, setDdValue] = useState(false);

  const getDdValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    setDdValue(newValue);
    console.log("Checkbox state:", newValue);

    // Define CSS variables based on checkbox state
    const cssVariables = newValue
      ? {
          "--background": "#000",
          "--black-clr": "#fff",
        }
      : {
          "--background": "#fff",
          "--black-clr": "#000",
        };
    // Set CSS variables
    for (const [property, value] of Object.entries(cssVariables)) {
      document.documentElement.style.setProperty(property, value);
    }
  };

  return (
    <header className="header">
      <Container>
        <Navbar expand="md" className="subHeader">
            {/* <Navbar.Brand href="/">MITHUN BL</Navbar.Brand> */}
            <Link href="/" className="navbar-brand">
               MITHUN BL
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto align-items-center">
                <Nav.Link href="#Skills">About</Nav.Link>
                <Nav.Link href="#Experience">Experience</Nav.Link>
                <Nav.Link href="#Projects">Projects</Nav.Link>
               </Nav>
                <label className="switch me-3">
                  <input onChange={getDdValue} type="checkbox" aria-label="Theme toggle" />
                  <span className="slider"></span>
                </label>
               
             
            </Navbar.Collapse>
            <div>
              <Link className='btn_black' href="/contact-us">
                Get in Touch
              </Link>
            </div>
        </Navbar>
      </Container>
    </header>
  );
}

export default Header;