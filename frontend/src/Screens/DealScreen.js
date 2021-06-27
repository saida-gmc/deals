import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Card } from "react-bootstrap";
import deals from "../deals";
// import axios from "axios";

const DealScreen = ({ match }) => {

  const deal = deals.find((deal) => deal._id == match.params.id);
  return (
    <div>
      <Link className="btn btn-dark my-3" to="/">
        Retour
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
              <strong>prix: </strong> {deal.price}{deal.promo}
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
                    {" "}
                    <ul>
                      {" "}
                      <li>Coupon valable 1 mois à partir de la date d'achat</li>
                      <li>
                        La présentation du coupon chez le partenaire est
                        obligatoire
                      </li>
                      <li>
                        Réservation obligatoire au minimum 3 jours à l'avance
                      </li>
                      <li>
                        Rendez vous selon disponibilité: premier arrivé premier
                        servi
                      
                      </li>
                    </ul>{" "}
                  </p>
                </Col>
              </Row>
              <Col>
              <Link to ={`/confirm/${deal._id}`}>
                <button type="submit" name="Submit" className="exclusive">
          
                  <span>J'en profite!</span>
                </button>
                </Link>
              </Col>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </div>
  );
};

export default DealScreen;
