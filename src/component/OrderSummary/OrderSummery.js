import React from "react";
import "./OrderSummary.css"
import Aux from "../../hoc/Aux";
import Button from "../UI/Button/Butoon";
const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((key) => {
    return (
      <li key={key}>
        <span style={{ textTransform: "capitalize" }}> {key}</span> :{" "}
        {props.ingredients[key]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Order Summary</h3>
      <p> A order summary with following ingredients :-</p>
      <ul>
          {ingredientSummary}
      </ul>
      <p>
  <strong>Total Price: {props.total_price}</strong>
      </p>
      <p>Continue to Checkout</p>
      <Button clicked={props.proceed} btnType="Success">Proceed</Button>
      <Button clicked={props.cancel} btnType="Danger">Cancel</Button>
    </Aux>
  );
};
export default OrderSummary;
