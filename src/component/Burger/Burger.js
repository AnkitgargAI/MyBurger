// import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";

import React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
const Burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients).map(key => {
        return [...Array(props.ingredients[key])].map((_,i) => {
           return <BurgerIngredient key={key+i} type={key}/>

        });
    }).reduce((arr,ele)=>{
        return arr.concat(ele);
    },[]);

        if(transformedIngredients.length ===0)
        {
            transformedIngredients = "Please add some ingredients";
        }
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
           {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>

    )
};

export default Burger;
