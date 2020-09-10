import React, { Component } from "react";
import "./OrderSummary.css";
import Aux from "../../hoc/Aux";
import Button from "../UI/Button/Butoon";
class OrderSummary extends Component {
  componentWillUpdate() {
    console.log("order summary updating");
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map((key) => {
      return (
        <li key={key}>
          <span style={{ textTransform: "capitalize" }}> {key}</span> :{" "}
          {this.props.ingredients[key]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Order Summary</h3>
        <p> A order summary with following ingredients :-</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.total_price}</strong>
        </p>
        <p>Continue to Checkout</p>
        <Button clicked={this.props.proceed} btnType="Success">
          Proceed
        </Button>
        <Button clicked={this.props.cancel} btnType="Danger">
          Cancel
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
