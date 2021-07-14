import React, { useEffect } from "react";
import DealsCard from "../Components/DealsCard";
import { useSelector, useDispatch } from "react-redux";
import { listDeals } from "../redux/actions/dealActions";

const DealsBeauty = () => {
  const dealList = useSelector((state) => state.dealList.deals);
  const beauty = dealList.filter((deal) => deal.category === "beauté");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listDeals());
  }, [dispatch]);

  return (
    <div>
      <div className="centerhome">
        {beauty.map((deal, key) => (
          <DealsCard key={deal._id} deal={deal} />
        ))}
      </div>
    </div>
  );
};

export default DealsBeauty;
