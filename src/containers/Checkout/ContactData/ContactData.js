import React, { Component } from "react";
import Button from "../../../component/UI/Button/Butoon";
import "./ContactData.css";
import axios from "../../../axios";
import Spinner from "../../../component/UI/Spinner/Spinner";
import Input from "../../../component/UI/Input/Input";
class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Email",
        },
        value: "",
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Street",
        },
        value: "",
      },
      postalCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your ZIP CODE",
        },
        value: "",
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Country",
        },
        value: "",
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "fastest", displayValue: "Fastest" },
            { value: "cheapest", displayValue: "Cheapest" },
          ],
        },
        value: "",
      },
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
    const formElementsArray = [];

    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    let form = (
      <form>
        {formElementsArray.map((form) => {
          return (
            <Input
              key={form.id}
              elementType="..."
              elementConfig="..."
              inputType="input"
              type="text"
              name="name"
              placeholder="Your name"
            />
          );
        })}

        <Input
          elementType="..."
          elementConfig="..."
          inputType="input"
          type="text"
          name="name"
          placeholder="Your name"
        />
        {/* <Input
          inputType="input"
          type="email"
          name="email"
          placeholder="Your email"
        />
        <Input
          inputType="input"
          type="text"
          name="address"
          placeholder="Your Address"
        />
        <Input
          inputType="input"
          type="number"
          name="postalCode"
          placeholder="Your postal code"
        /> */}
        <Button btnType="Success" clicked={this.orderHandler}>
          Place Order
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
