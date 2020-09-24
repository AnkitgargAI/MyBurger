import React, { Component } from "react";
import CheckoutSummary from "../../component/UI/Order/CheckoutSummary/CheckoutSummary";
import {Route} from "react-router-dom";
import ContactData from "./ContactData/ContactData"
class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice:0
  };
  componentDidMount()
  {
    const query = new URLSearchParams(this.props.location.search)
    console.log(query);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries())
    {
      if(param[0] === 'price')
      {
        price = param[1];
      }
      else{
        ingredients[param[0]] = +param[1];
      }
    }
    this.setState({ingredients:ingredients,totalPrice:price})
    console.log(ingredients);

  }
  checkoutCancelledHandler = () =>
  {
    this.props.history.goBack();
  }
  checkoutContinueHandler = () =>
  {
    this.props.history.replace('/checkout/contact-data'); 
  }
  render() {
    let checkoutSummary = (<CheckoutSummary ingredients={this.state.ingredients}
      checkoutCancelled={this.checkoutCancelledHandler}
      checkoutContinue={this.checkoutContinueHandler} />)
      if(this.state.ingredients == null)
      {
        checkoutSummary = null
      }
    return (
      <div>
        {checkoutSummary}
        <Route path={this.props.match.path + '/contact-data'} render={(props)=>(<ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} {...props}/>)}/>
      </div>
    );
  }
}
export default Checkout;
