import React from "react";
import "./Order.css";

const Order = (props) => {
  let ingredients = [];
   
  for(let name in props.ingredients)
  {
    ingredients.push({name:name, qty:props.ingredients[name]})

  }
  let ingredientsOutput = ingredients.map(ingredient =>{
                  console.log(ingredient);
                  return <span
                    style={{textTransform:'capitalize',
                  display:'inline-block',
                  margin:'0 8px',
                  border: '1px solid #ccc',
                  padding:'5px'
                }}
                  key={ingredient.name}>{ingredient.name}({ingredient.qty})</span>;
                });
  return (
    <div className="Order">
      <p>Ingredients: {ingredientsOutput}</p>
      
      <p>Email: {props.email}</p>
      <p>Price: $ <strong>{Number.parseFloat(props.price)}</strong></p>
    </div>
  );
};

export default Order;
