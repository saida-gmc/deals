import React, { useEffect } from "react";
import DealsCard from "../Components/DealsCard";
import { Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listDeals } from "../redux/actions/dealActions";
// import axios from "axios";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const dealList = useSelector((state) => state.dealList.deals);
  useEffect(() => {
    dispatch(listDeals());
  }, [dispatch]);

  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="w-90"
              src="/images/dealcapture1.jpg"
              alt="First slide"
              // width="500px"
              height="400px"
            />
            <Carousel.Caption>
              <h3 style={{ color: "black" }}>Remises jusqu'à 70% </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="w-90"
              src="/images/dealcapture2.jpg"
              alt="Second slide"
              // width="400px"
              height="400px"
            />
            <Carousel.Caption>
              <h3 style={{ color: "black" }}>
                Profitez des meilleurs deals en Tunisie
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <h1 style={{ color: "black" }}>Nos offres </h1>
      </div>
      <div className="centerhome">
        {dealList.map((deal, key) => (
          <DealsCard key={deal._id} deal={deal} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
