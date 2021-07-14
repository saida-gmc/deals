import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { logout } from "../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = ({ history }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (search.trim()) {
      history.push(`/deal/${search}`);
    } else {
      history.push("/");
    }
  };
  const cart = useSelector((state) => state.cart.cartDetails);
  const total = useSelector((state) => state.cart.cartTotal);
  const authenticated = useSelector((state) => state.userList.authenticated);
  const role = useSelector((state) => state.userList.user.role);
  const id = useSelector((state) => state.userList.user._id);
  const username = useSelector((state) => state.userList.user.name);

  if (authenticated) {
    return (
      <>
        <div className="connect">
          {role === "admin" ? (
            <Link to={`/admin-profile/${id}`}> {username} </Link>
          ) : role === "provider" ? (
            <Link to={`/provider-profile/${id}`}>{username} </Link>
          ) : (
            <Link to={`/user-profile/${id}`}>{username} </Link>
          )}

          <LinkContainer to="/">
            <a href="/" onClick={() => dispatch(logout())}>
              <i className="fa fa-power-off fa-fw"></i>
              Logout
            </a>
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

            <LinkContainer to="/categories/detente">
              <Nav.Link href="#pricing">détente</Nav.Link>
            </LinkContainer>
          </Nav>
          <input
            type="text"
            id="tags"
            className="form-control ui-autocomplete-input"
            placeholder="Rechercher un Deal"
            autocomplete="off"
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button
            type="button"
            className="exclusive"
            id="search-btn"
            disabled=""
            onSubmit={submitHandler}
          >
            OK
          </button>
          <div class="col-md-2 col-sm-2 col-xs-10 panier">
            <Link to="/confirm">
              <img src="/images/bag.png" width="30px" height="30px" alt="bag" />
              <strong> {total} </strong> <sup>DT</sup>
              <span class="texte-gris">
                ( {cart.reduce((acc, item) => acc + item.qty, 0)})
              </span>
            </Link>
          </div>
        </Navbar>
      </>
    );
  } else {
    return (
      <>
        <div className="connect">
          <LinkContainer to="/login">
            <a href="/login">
              <i className="fa fa-power-off fa-fw"></i>connexion
            </a>
          </LinkContainer>
          <LinkContainer to="/register">
            <a href="/registerprovider">créer un compte</a>
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

            <LinkContainer to="/categories/detente">
              <Nav.Link href="#pricing">détente</Nav.Link>
            </LinkContainer>
          </Nav>
          <input
            type="text"
            id="tags"
            className="form-control ui-autocomplete-input"
            placeholder="Rechercher un Deal"
            autocomplete="off"
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button
            type="button"
            className="exclusive"
            id="search-btn"
            disabled=""
            onSubmit={submitHandler}
          >
            OK
          </button>
          <div class="col-md-2 col-sm-2 col-xs-10 panier">
            <Link to="/confirm">
              <img src="/images/bag.png" width="30px" height="30px" alt="bag" />
              <strong> {total} </strong>
              <sup>DT</sup>
              <span class="texte-gris">({cart.length})</span>
            </Link>
            {/* { cart  ?(
            ) : (
              <a href="/confirm">
                <img
                  src="/images/bag.png"
                  width="30px"
                  height="30px"
                  alt="bag"
                />
                <strong> {cart[0].price} </strong>
                <sup>DT</sup>
                <span class="texte-gris">({cart.length})</span>
              </a>
            )} */}
          </div>
        </Navbar>
      </>
    );
  }
};

export default Header;
