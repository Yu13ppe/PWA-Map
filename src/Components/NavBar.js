import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import routes from '../Config/Routes-Nav'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
} from "reactstrap";


function NavBar() {

  const [isReadyForInstall, setIsReadyForInstall] = React.useState(false);

  const [collapsed, setCollapsed] = React.useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      // Prevent the mini-infobar from appearing on mobile.
      event.preventDefault();
      console.log("👍", "beforeinstallprompt", event);
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install button container.
      setIsReadyForInstall(true);
    });
  }, []);

  async function downloadApp() {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log("oops, no prompt event guardado en window");
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    setIsReadyForInstall(false);
  }

  return (
    // <div>
    //   <Navbar className='NavBar' light>
    //     <h1 className='Logo'>InfoTPM</h1>
    //     <NavbarToggler onClick={toggleNavbar} className="burguer" />
    //     <Collapse className='Collapse' isOpen={!collapsed} navbar>
    //       <Nav navbar>
    //         <ul className='buttons'>
    //           {routes.reverse().map((route) => (
    //             <li>
    //               <Link className='btn' to={route.path}>{route.title}</Link>
    //             </li>
    //             ))}
    //           {isReadyForInstall && <li className='btn download-btn' onClick={downloadApp}>Download</li>}
    //         </ul>
    //       </Nav>
    //     </Collapse>
    //   </Navbar>
    // </div>

    <div>
      <Navbar color="faded" light className="navbar">
        <NavbarBrand href="/" className="me-auto">
          <h1 className="title1">InfoTPM</h1>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="botonDesplegable" />
        <Collapse isOpen={!collapsed} navbar className="desplegable">
          <Nav navbar>
            <ul className='buttons'>
              {routes.reverse().map((route) => (
                <li>
                  <Link className='btn' to={route.path}>{route.title}</Link>
                  <div className='Divider'/>
                </li>
              ))}
              {isReadyForInstall && <li className='btn download-btn' onClick={downloadApp}>Download</li>}
            </ul>
            {/* <NavItem >
              <NavLink href="/" className='primeraOpcion'>Perfil</NavLink>
            </NavItem>
            <hr className="lineaRecta1"/>
            <NavItem>
              <NavLink href="/" >
                <p className="opcion2">Lineas</p>
              </NavLink>
            </NavItem>
            <hr className="lineaRecta2"/>
            <NavItem>
              <NavLink href="/" >
                <p className="opcion3">Mapa</p>
              </NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export { NavBar }