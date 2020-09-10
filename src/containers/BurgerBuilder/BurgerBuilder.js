import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../component/Burger/Burger";
import BuildControls from "../../component/BuildControls/BuildControls";
import Modal from "../../component/UI/Modal/Modal";
import OrderSummary from "../../component/OrderSummary/OrderSummery"
const INTEGREIDENT_PRICES = {
  salad: 0.5,
  bacon: 1.3,
  meat: 10,
  cheese: 5,
};
class BurgerBuilder extends Component {
  // constructor(props)
  // {
  //     super(props);
  // }

  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      meat: 0,
      cheese: 0,
    },
    totalPrice: 50,
    purchasable: false,
    purchasing:false
  };

  addIntegredientHandler = (type) => {
    const newCount = this.state.ingredients[type] + 1;
    const updatedIntegredients = {
      ...this.state.ingredients,
    };
    updatedIntegredients[type] = newCount;
    const Priceaddition = INTEGREIDENT_PRICES[type];
    const price = this.state.totalPrice + Priceaddition;
    this.setState({ totalPrice: price, ingredients: updatedIntegredients });
    this.purchasableHandler(updatedIntegredients);
  };

  removeIntegredientHandler = (type) => {
    if (this.state.ingredients[type] <= 0) {
      return;
    }
    const newCount = this.state.ingredients[type] - 1;
    const updatedIntegredients = {
      ...this.state.ingredients,
    };
    updatedIntegredients[type] = newCount;
    const Priceaddition = INTEGREIDENT_PRICES[type];
    const price = this.state.totalPrice - Priceaddition;
    this.setState({ totalPrice: price, ingredients: updatedIntegredients });
    this.purchasableHandler(updatedIntegredients);
  };

  purchasableHandler = (integredients) => {
    // const integredients = { ...this.state.ingredients };
    let sum = Object.keys(integredients)
      .map((key) => {
        return integredients[key];
      })
      .reduce((sum, ele) => {
        return sum + ele;
      }, 0);
    this.setState({
      purchasable: sum > 0,
    });
  };

  purchaseHandler = ()=>
  {
    let oldPurchsingStatus = this.state.purchasing;
    this.setState({purchasing:!oldPurchsingStatus})
  };

  purchaseProceedHandler=()=>{
    alert('yes, continue')
  };


  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseHandler}>
          <OrderSummary total_price={this.state.totalPrice.toFixed(2)} proceed={this.purchaseProceedHandler}  cancel={this.purchaseHandler} ingredients={this.state.ingredients}/>
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          integredientAdded={this.addIntegredientHandler}
          integredientRemove={this.removeIntegredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          orderedSummary = {this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
