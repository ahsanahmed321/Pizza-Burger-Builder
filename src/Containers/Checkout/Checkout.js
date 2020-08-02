import React, { Fragment } from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import classes from "./Checkout.module.css";

class Checkout extends Component {
  render() {
    console.log(this.props.ord);

    var orderId = 0;

    var print = this.props.ord.map(order => {
      var ooo;
      orderId++;
      if (order.pizza) {
        ooo = (
          <Card className={classes.order} key={orderId}>
            <CardTitle style={{ fontSize: "2rem" }}>Pizza</CardTitle>
            <CardBody>
              <CardText> Oregano : {order.pizza.Oregano}</CardText>
              <CardText> Olive : {order.pizza.Olive}</CardText>
              <CardText> Mushroom : {order.pizza.Mushroom}</CardText>
              <CardText> Pepperoni : {order.pizza.Pepperoni}</CardText>
            </CardBody>
          </Card>
        );
      }

      if (order.burger) {
        ooo = (
          <Card className={classes.order} key={orderId}>
            <CardTitle style={{ fontSize: "2rem" }}>Burger</CardTitle>
            <CardBody>
              <CardText> Meat : {order.burger.Meat}</CardText>
              <CardText> Cheese : {order.burger.Cheese}</CardText>
              <CardText> Bacon : {order.burger.Bacon}</CardText>
              <CardText> Salad : {order.burger.Salad}</CardText>
            </CardBody>
          </Card>
        );
      }
      return ooo;
    });

    return <Fragment>{print}</Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    ord: state.order
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddToCartHandler: tempOrder =>
      dispatch({ type: "ADD_TO_CART", order: tempOrder })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
