import React, { Fragment } from "react";
import { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  Container,
} from "reactstrap";
import classes from "./Checkout.module.css";

import oreganoSVG from "../../Images/oreganoSVG.svg";
import oliveSVG from "../../Images/oliveSVG.svg";
import mushroomSVG from "../../Images/mushroomSVG.svg";
import PepperoniSVG from "../../Images/pepperoniSVG.svg";

import meatSVG from "../../Images/meatSVG.svg";
import cheeseSVG from "../../Images/cheeseSVG.svg";
import baconSVG from "../../Images/baconSVG.svg";
import saladSVG from "../../Images/saladSVG.svg";

class Checkout extends Component {
  render() {
    console.log(this.props.ord);

    var orderId = 0;

    var print = this.props.ord.map((order) => {
      var ooo;
      orderId++;
      if (order.pizza) {
        ooo = (
          <Col md={4}>
            <Card className={classes.order} key={orderId}>
              <CardTitle style={{ fontSize: "2rem" }}>Pizza</CardTitle>
              <CardBody>
                <CardText className={classes.orderIngredient}>
                  <img className="mx-3" height={24} src={oreganoSVG} />
                  Oregano : {order.pizza.Oregano}
                </CardText>
                <CardText className={classes.orderIngredient}>
                  <img className="mx-3" height={24} src={oliveSVG} />
                  Olive : {order.pizza.Olive}
                </CardText>
                <CardText className={classes.orderIngredient}>
                  <img className="mx-3" height={24} src={mushroomSVG} />
                  Mushroom : {order.pizza.Mushroom}
                </CardText>
                <CardText className={classes.orderIngredient}>
                  <img className="mx-3" height={24} src={PepperoniSVG} />
                  Pepperoni : {order.pizza.Pepperoni}
                </CardText>
              </CardBody>
            </Card>
          </Col>
        );
      }

      if (order.burger) {
        ooo = (
          <Col md={4}>
            <Card className={classes.order} key={orderId}>
              <CardTitle style={{ fontSize: "2rem" }}>Burger</CardTitle>
              <CardBody>
                <CardText>
                  <img className="mx-3" height={24} src={meatSVG} />
                  Meat : {order.burger.Meat}
                </CardText>
                <CardText>
                  <img className="mx-3" height={24} src={cheeseSVG} />
                  Cheese : {order.burger.Cheese}
                </CardText>
                <CardText>
                  <img className="mx-3" height={24} src={baconSVG} />
                  Bacon : {order.burger.Bacon}
                </CardText>
                <CardText>
                  <img className="mx-3" height={24} src={saladSVG} />
                  Salad : {order.burger.Salad}
                </CardText>
              </CardBody>
            </Card>
          </Col>
        );
      }
      return ooo;
    });

    if (print.length === 0) {
      print = (
        <div style={{ textAlign: "center !important", color: "white" }}>
          <h2 className="mt-5 " style={{ textAlign: "center" }}>
            No order has been placed yet
          </h2>
        </div>
      );
    }

    return (
      <Container className="mt-5">
        <Row>{print}</Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ord: state.order,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddToCartHandler: (tempOrder) =>
      dispatch({ type: "ADD_TO_CART", order: tempOrder }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
