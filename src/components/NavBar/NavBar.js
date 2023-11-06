import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import Logo from './images/logo.png'
import CartWidget from "../CartWidget/CartWidget";

function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="#"><img
              src={Logo}
              className="img-fluid ms-5"
              width='60'
              alt='logo'
              loading='lazy'
            /></MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0 d-flex justify-content-around align-items-center">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="#">
                Inicio
              </MDBNavbarLink>
            </MDBNavbarItem>
            
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  Productos
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Todos</MDBDropdownItem>
                  <MDBDropdownItem link>Galletas</MDBDropdownItem>
                  <MDBDropdownItem link>Pasteles</MDBDropdownItem>
                  <MDBDropdownItem link>Brownies</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBNavbarLink href="#">Contacto</MDBNavbarLink>
            </MDBNavbarItem>

            <CartWidget/>

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navbar;
