import React from "react";
import classes from "./PizzaToppings.module.css";

const PizzaToppings = props => {
  var i = 0;
  var rtToppings = <div></div>;
  if (props.toppings) {
    rtToppings = props.toppings.map(topping => {
      i++;
      var t = "topping" + i;
      return (
        <div key={t} className={`${classes[topping]} ${classes[t]}`}></div>
      );
    });
  }

  return rtToppings;
};

export default PizzaToppings;
