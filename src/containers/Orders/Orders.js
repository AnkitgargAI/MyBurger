import React, { Component } from "react";
import Order from "../../component/Order/Order";
import axios from "../../axios";
import Spinner from "../../component/UI/Spinner/Spinner";
import withErrorHandler from "../../component/WithErrorHandler/WithErrorHandler"

class Orders extends Component {
  state = {
    orders: [],
    loading:true
  };
  componentWillMount() {
    axios
      .get("/orders.json")
      .then((response) => {
        const fetchOrders = [];
        for(let key in response.data)
        {
          fetchOrders.push({...response.data[key],id:key})
        }
        this.setState({ orders: fetchOrders });
        console.log(this.state.orders);
      });
  }
  render() {
    let orders = <Spinner/>;
    console.log(this.state.orders.length);
    if (this.state.orders.length >0) {
      orders = this.state.orders.map(order => {
          console.log(order);
        return <Order key={order.id} ingredients={order.ingredients} price={order.price} email={order.email} />;
      });
    }
    return <h1>{orders}</h1>;
  }
}
export default withErrorHandler(Orders,axios);
