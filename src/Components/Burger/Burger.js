import React from "react";
import classes from "./Burger.module.css";
const Burger = props => {
  var i = 0;

  var pizzaIngredients = props.ingredients.map(ingredient => {
    i++;
    return <div key={i} className={classes[ingredient]}></div>;
  });

  return (
    <div className={classes.burgerSize}>
      <div className={classes.BreadTop}>
        <div className={classes.Seeds1}></div>
        <div className={classes.Seeds2}></div>
      </div>
      {pizzaIngredients}
      <div className={classes.BreadBottom}></div>
    </div>
  );
};

export default Burger;
