import React from "react";
import "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";
const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
];

const BuildControls = (props) => {
  return (
    <div className="BuildControls">
        <p>Current Price :{props.price.toFixed(2)}</p>
      {controls.map((ctrl) => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            type={ctrl.type}
            added={()=>props.integredientAdded(ctrl.type)}
            remove={()=>props.integredientRemove(ctrl.type)}
            disabled = {props.disabled[ctrl.type]}
          />
        );
      })}
      <button className="OrderButton" onClick={props.orderedSummary} disabled={!props.purchasable}>Order Now</button>
    </div>
  );
};
export default BuildControls;
