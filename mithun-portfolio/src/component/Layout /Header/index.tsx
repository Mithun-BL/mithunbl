import { useState } from 'react';
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../Header/Header.module.scss';
// import InputGroup from 'react-bootstrap/InputGroup';

// import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
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
    <header className={`${styles["header"]}`}>
      <Navbar expand="lg" className={`${styles["subHeader"]}`}>
        <Container>
          <Navbar.Brand href="/">MITHUN BL</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
            <label className="switch">
              <input onChange={getDdValue} type="checkbox" aria-label="Theme toggle" />
              <span className="slider"></span>
            </label>
              <Nav.Link href="#Skills">About</Nav.Link>
              <Nav.Link href="#Skills">Skills</Nav.Link>
              <Nav.Link href="#Experience">Experience</Nav.Link>
              <Nav.Link href="#Projects">Projects</Nav.Link>
              {/* <Nav.Link href="#Contact Us">Contact Us</Nav.Link> */}
              {/* <Nav.Link href="#Get in Touch">Get in Touch</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
          <div>
             <Link className='btn_black' href={'..'}>Get in Touch</Link>
          </div>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;