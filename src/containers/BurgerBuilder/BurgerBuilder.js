import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../component/Burger/Burger";
import BuildControls from "../../component/BuildControls/BuildControls";
import Modal from "../../component/UI/Modal/Modal";
import OrderSummary from "../../component/OrderSummary/OrderSummery";
import axios from "../../axios";
import Spinner from "../../component/UI/Spinner/Spinner";
import WitErrorHandler from "../../component/WithErrorHandler/WithErrorHandler";
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
    ingredients: null,
    totalPrice: 50,
    purchasable: false,
    purchasing: false,
    loading: false,
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

  purchaseHandler = () => {
    let oldPurchsingStatus = this.state.purchasing;
    this.setState({ purchasing: !oldPurchsingStatus });
  };

  purchaseProceedHandler = () => {

    const queryParams =[];
    for(let i in this.state.ingredients)
    {
      queryParams.push(encodeURIComponent(i)+'='+ this.state.ingredients[i])
    }
    queryParams.push('price='+this.state.totalPrice);
    this.props.history.push({
      pathname:"/checkout",
      search:queryParams.join('&')
    });
    // alert("yes, continue");
    // this.setState({ loading: true });

    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   address: {
    //     name: "Ankit Garg",
    //     address: "Maujpur, delhi",
    //     zipcode: 111223,
    //     mobile: "+91-9999336116",
    //   },
    //   email: "ankit@yopmail.com",
    // };
    // axios
    //   .post("/orders.json", order)
    //   .then((response) => {
    //     console.log(response);
    //     this.setState({ loading: false,purchasing:false });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     this.setState({ loading: false,purchasing:false });
    //   });

  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    if(this.state.ingredients)
    {
      for (const key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
      }
    }
    
    let orderSummary = <OrderSummary
                        total_price={this.state.totalPrice.toFixed(2)}
                        proceed={this.purchaseProceedHandler}
                        cancel={this.purchaseHandler}
                        ingredients={this.state.ingredients}
                        
  />
  if(this.state.loading === true)
  {
    orderSummary = <Spinner/>
  }

  // let burger = 
    return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseHandler}>
                {this.state.ingredients !== null ? orderSummary :''}
                </Modal>
                {this.state.ingredients !== null ?
                <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                  integredientAdded={this.addIntegredientHandler}
                  integredientRemove={this.removeIntegredientHandler}
                  disabled={disabledInfo}
                  ingredients={this.state.ingredients}
                  price={this.state.totalPrice}
                  purchasable={this.state.purchasable}
                  orderedSummary={this.purchaseHandler}
                />
                </Aux>:''}
              </Aux>
    );
  }

  componentDidMount()
  {
    axios.get("https://react-my-burger-e703c.firebaseio.com/ingredients.json").then(response=>{
      this.setState({ingredients:response.data});
    });
  }
}

export default WitErrorHandler(BurgerBuilder, axios);
