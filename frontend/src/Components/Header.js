import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <>
      <div className="connect">
        <LinkContainer to="/login">
          <a href="/login">
            <i className="fa fa-power-off fa-fw"></i>connexion
          </a>
        </LinkContainer>
        <LinkContainer to="/register">
          <a href="/registerprovider">compte vendeur</a>
        </LinkContainer>

        <LinkContainer to="/register">
          <a href="/registeruser">compte client</a>
        </LinkContainer>
      </div>

      <Navbar bg="light" variant="light">
        <LinkContainer to="/">
          <Navbar.Brand>
            <h2 style={{ color: "pink" }}>YesYouDeal</h2>
          </Navbar.Brand>
        </LinkContainer>
        <Nav className="mr-auto">
          <LinkContainer to="/categories/beaute">
            <Nav.Link>Beauté</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/categories/sport">
            <Nav.Link>Sport</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/categories/dentente">
            <Nav.Link href="#pricing">détente</Nav.Link>
          </LinkContainer>
        </Nav>
        <input
          type="text"
          id="tags"
          className="form-control ui-autocomplete-input"
          placeholder="Rechercher un Deal"
          autocomplete="off"
        ></input>
        <button
          type="button"
          className="btn btn-primary"
          id="search-btn"
          disabled=""
        >
          OK
        </button>
      </Navbar>
    </>
  );
};

export default Header;
