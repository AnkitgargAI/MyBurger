import React, { Component } from "react";
import Button from "../../../component/UI/Button/Butoon";
import "./ContactData.css";
import axios from "../../../axios";
import Spinner from "../../../component/UI/Spinner/Spinner";
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    console.log(this.props.ingredients);
    this.setState({ loading: true });

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      address: {
        name: "Ankit Garg",
        address: "Maujpur, delhi",
        zipcode: 111223,
        mobile: "+91-9999336116",
      },
      email: "ankit@yopmail.com",
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        console.log(response);
        this.setState({ loading: false, purchasing: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false, purchasing: false });
      });
  };
  render() {
    let form = (
      <form>
        <input
          className="Input"
          type="text"
          name="name"
          placeholder="Your name"
        />
        <input
          className="Input"
          type="email"
          name="email"
          placeholder="Your email"
        />
        <input
          className="Input"
          type="text"
          name="address"
          placeholder="Your Address"
        />
        <input
          className="Input"
          type="number"
          name="postalCode"
          placeholder="Your postal code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          Submit
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className="ContactData">
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}
export default ContactData;
