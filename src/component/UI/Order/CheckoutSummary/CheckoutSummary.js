import React from "react";
import Burger from "../../../Burger/Burger";
import Button from "../../Button/Butoon";
import "./CheckoutSummary";
const CheckoutSummary = (props) => {
  return (
    <div className="CheckoutSummary">
      <h1>We hope it taste well !</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger"  clicked={props.checkoutCancelled}>Cancel</Button>
      <Button btnType="Success" clicked={props.checkoutContinue}>Proceed</Button>
    </div>
  );
};

export default CheckoutSummary;
