import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Card, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  dealDetails,
  deleteDeal,
  editDeal,
} from "../redux/actions/dealActions";
import { addToCart } from "../redux/actions/commanActions";

const DealScreen = ({ match, history }) => {
  const dispatch = useDispatch();

  const deal = useSelector((state) => state.dealDetails.deals);

  useEffect(() => {
    dispatch(dealDetails(match.params.id));
  }, [dispatch, match]);

  const authenticated = useSelector((state) => state.userList.authenticated);
  const role = useSelector((state) => state.userList.user.role);
  const provider = useSelector((state) => state.userList.user._id);

  const [show, setShow] = useState(false);
  const [newDeal, setNewDeal] = useState(deal);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const add = (e) => {
    e.preventDefault();
    dispatch(addToCart(deal));
    history.push(`/confirm`);
  };

  const change = (e) => {
    setNewDeal({
      ...newDeal,
      [e.target.name]: e.target.value,
    });
  };

  const deletedeal = (e) => {
    e.preventDefault();
    dispatch(deleteDeal(deal._id));
    history.push("/");
  };
  const updatedeal = (e) => {
    e.preventDefault();
    dispatch(editDeal(deal._id, newDeal));
    handleClose();
  };

  if (authenticated && role === "admin") {
    return (
      <div>
        <Link to="/">
          <button className="exclusive">Retour</button>
        </Link>

        <Row>
          <Col md={6}>
            <img
              src={deal.pictureURL}
              alt={deal.category}
              width="500px"
              height="400px"
            />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{deal.description}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <strong>
                  prix: {deal.price} DT
                  {deal.promo}
                </strong>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Col>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row ml={5}>
                  <Col md={3}>
                    {" "}
                    <strong> L'offre comprend:</strong>
                  </Col>
                  <Col>
                    <p>{deal.details}</p>
                  </Col>
                </Row>
                <Row ml={5}>
                  <Col md={3}>
                    {" "}
                    <strong> Lieu:</strong>
                  </Col>
                  <Col>
                    <p>{deal.location}</p>
                  </Col>
                </Row>
                <Row>
                  <Col md={3}>
                    {" "}
                    <strong> Conditions:</strong>
                  </Col>
                  <Col>
                    <p>
                      <ul>
                        <li>
                          Coupon valable 1 mois à partir de la date d'achat
                        </li>
                        <li>
                          La présentation du coupon chez le partenaire est
                          obligatoire
                        </li>
                        <li>
                          Réservation obligatoire au minimum 3 jours à l'avance
                        </li>
                        <li>
                          Rendez vous selon disponibilité: premier arrivé
                          premier servi
                        </li>
                      </ul>{" "}
                    </p>
                  </Col>
                </Row>
                <Col>
                  <button
                    type="submit"
                    name="Submit"
                    onClick={(e) => deletedeal(e)}
                    className="exclusive"
                  >
                    <span>Supprimer le Deal</span>
                  </button>
                </Col>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </div>
    );
  } else if (
    authenticated &&
    role === "provider" &&
    provider === deal.provider
  ) {
    return (
      <div>
        <Link to="/">
          <button className="exclusive">Retour</button>
        </Link>

        <Row>
          <Col md={6}>
            <img
              src={deal.pictureURL}
              alt={deal.category}
              width="500px"
              height="400px"
            />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{deal.description}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>
                  prix: {deal.price} DT
                  {deal.promo}
                </strong>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
        <Col>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row ml={5}>
                  <Col md={3}>
                    <strong> L'offre comprend:</strong>
                  </Col>
                  <Col>
                    <p>{deal.details}</p>
                  </Col>
                </Row>
                <Row ml={5}>
                  <Col md={3}>
                    <strong> Lieu:</strong>
                  </Col>
                  <Col>
                    <p>{deal.location}</p>
                  </Col>
                </Row>
                <Row>
                  <Col md={3}>
                    {" "}
                    <strong> Conditions:</strong>
                  </Col>
                  <Col>
                    <p>
                      <ul>
                        <li>
                          Coupon valable 1 mois à partir de la date d'achat
                        </li>
                        <li>
                          La présentation du coupon chez le partenaire est
                          obligatoire
                        </li>
                        <li>
                          Réservation obligatoire au minimum 3 jours à l'avance
                        </li>
                        <li>
                          Rendez vous selon disponibilité: premier arrivé
                          premier servi
                        </li>
                      </ul>{" "}
                    </p>
                  </Col>
                </Row>
                <Col>
                  <button
                    type="submit"
                    name="Submit"
                    onClick={(e) => deletedeal(e)}
                    className="exclusive"
                  >
                    <span>Supprimer le Deal</span>
                  </button>
                  {/* mettre à jour le deal réservé au provider qui a créé le deal */}
                  <button
                    type="submit"
                    name="Submit"
                    onClick={handleShow}
                    className="exclusive"
                  >
                    <span> Mettre à jour</span>
                  </button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                      <Modal.Title>Mettre à jour</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <select
                        className="form-select form-select-sm"
                        aria-label=".form-select-sm example"
                        name="category"
                        onChange={(e) => change(e)}
                      >
                        <option selected>Choisir une catégorie</option>
                        <option name="beauté">beauté</option>
                        <option name="détente">détente</option>
                        <option name="sport">sport</option>
                      </select>
                      <label className="col-form-label">description</label>
                      <input
                        className="form-control"
                        type="text"
                        value={newDeal.description}
                        name="description"
                        placeholder="enter"
                        onChange={(e) => change(e)}
                      />
                      <label className="col-form-label">details</label>
                      <input
                        className="form-control"
                        type="text"
                        name="details"
                        value={newDeal.details}
                        placeholder="enter"
                        onChange={(e) => change(e)}
                      />
                      <label className="col-form-label">date</label>
                      <input
                        className="form-control"
                        type="text"
                        name="date"
                        value={newDeal.date}
                        placeholder="enter"
                        onChange={(e) => change(e)}
                      />
                      <label className="col-form-label">pictureURL</label>
                      <input
                        className="form-control"
                        type="text"
                        value={newDeal.pictureURL}
                        name="pictureURL"
                        placeholder="enter"
                        onChange={(e) => change(e)}
                      />
                      <label className="col-form-label">location</label>
                      <input
                        className="form-control"
                        type="au lieu de"
                        name="location"
                        value={newDeal.location}
                        placeholder="enter"
                        onChange={(e) => change(e)}
                      />
                      <label className="col-form-label">prix</label>
                      <input
                        className="form-control"
                        type="au lieu de"
                        name="price"
                        value={newDeal.price}
                        placeholder="enter"
                        onChange={(e) => change(e)}
                      />
                      <label className="col-form-label">prix avant promo</label>
                      <input
                        className="form-control"
                        value={newDeal.promo}
                        type="texte"
                        name="promo"
                        placeholder="au lieu de "
                        onChange={(e) => change(e)}
                      />
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={(e) => updatedeal(e)}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Col>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </div>
    );
  } else {
    return (
      <div>
        <Link to="/">
          <button className="exclusive">Retour</button>
        </Link>

        <Row>
          <Col md={6}>
            <img
              src={deal.pictureURL}
              alt={deal.category}
              width="500px"
              height="400px"
            />
          </Col>
          <Col md={5}>
            <Col>
              <br />
            </Col>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{deal.description}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                <strong>
                  prix: {deal.price} DT
                  {deal.promo}
                </strong>
              </ListGroup.Item>
            </ListGroup>
            <Col>
              <br />
            </Col>
            <Col>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row ml={5}>
                      <Col md={3}>
                        {" "}
                        <strong> L'offre comprend:</strong>
                      </Col>
                      <Col>
                        <p>{deal.details}</p>
                      </Col>
                    </Row>
                    <Row ml={5}>
                      <Col md={3}>
                        {" "}
                        <strong> Lieu:</strong>
                      </Col>
                      <Col>
                        <p>{deal.location}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={3}>
                        {" "}
                        <strong> Conditions:</strong>
                      </Col>
                      <Col>
                        <p>
                          {" "}
                          <ul>
                            {" "}
                            <li>
                              Coupon valable 1 mois à partir de la date d'achat
                            </li>
                            <li>
                              La présentation du coupon chez le partenaire est
                              obligatoire
                            </li>
                            <li>
                              Réservation obligatoire au minimum 3 jours à
                              l'avance
                            </li>
                            <li>
                              Rendez vous selon disponibilité: premier arrivé
                              premier servi
                            </li>
                          </ul>{" "}
                        </p>
                      </Col>
                    </Row>
                    <Col>
                      <Link to={`/confirm/${deal._id}`}>
                        <button
                          onClick={(e) => add(e)}
                          type="submit"
                          name="Submit"
                          className="exclusive"
                        >
                          <span>Ajouter au panier</span>
                        </button>
                      </Link>
                    </Col>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Col>
        </Row>
      </div>
    );
  }
};

export default DealScreen;
