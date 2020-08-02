import React from "react";
import { Component } from "react";
import classes from "./PizzaBuilder.module.css";
import PizzaToppings from "../../Components/PizzaToppings/PizzaToppings";
import { Row, Col, Container, Button } from "reactstrap";
import { connect } from "react-redux";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

class PizzaBuilder extends Component {
  state = {
    pizzaToppings: [],
    pizzaOrder: {
      Oregano: 0,
      Olive: 0,
      Mushroom: 0,
      Pepperoni: 0
    },
    modal: false,
    limitModal: false
  };

  addTopping = e => {
    if (this.state.pizzaToppings.length < 19) {
      this.setState({
        pizzaToppings: [...this.state.pizzaToppings, e.target.id]
      });

      this.setState({
        pizzaOrder: {
          ...this.state.pizzaOrder,
          [e.target.name]: this.state.pizzaOrder[e.target.name] + 1
        }
      });
    } else {
      this.setState({ limitModal: true });
    }
  };

  /*addTopping = e => {
    this.setState({
      pizzaToppings: [...this.state.pizzaToppings, e.target.id]
    });

    if (e.target.name === "Oregano")
      this.setState(prevState => ({
        pizzaOrder: {
          ...prevState.pizzaOrder,
          Oregano: this.state.pizzaOrder.Oregano + 1
        }
      }));
    if (e.target.name === "Olive")
      this.setState(prevState => ({
        pizzaOrder: {
          ...prevState.pizzaOrder,
          Olive: this.state.pizzaOrder.Olive + 1
        }
      }));
    if (e.target.name === "Mushroom")
      this.setState(prevState => ({
        pizzaOrder: {
          ...prevState.pizzaOrder,
          Mushroom: this.state.pizzaOrder.Mushroom + 1
        }
      }));
    if (e.target.name === "Pepperoni")
      this.setState(prevState => ({
        pizzaOrder: {
          ...prevState.pizzaOrder,
          Pepperoni: this.state.pizzaOrder.Pepperoni + 1
        }
      }));
  }; */

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  limitToggle = () => {
    this.setState({ limitModal: !this.state.limitModal });
  };

  reseter = () => {
    this.setState({
      pizzaToppings: [],
      pizzaOrder: {
        Oregano: 0,
        Olive: 0,
        Mushroom: 0,
        Pepperoni: 0
      }
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Modal isOpen={this.state.limitModal} toggle={this.limitToggle}>
          <ModalHeader>Sorry</ModalHeader>
          <ModalBody>Toppings Limit Exceeded</ModalBody>
        </Modal>
        <div className={classes.pizza}>
          <div className={classes.crust}>
            <div className={classes.cheese}>
              <PizzaToppings toppings={this.state.pizzaToppings} />
            </div>
          </div>
        </div>
        <Container>
          <div>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeader toggle={this.toggle}>Great Choice</ModalHeader>
              <ModalBody>
                Confirm your Order ???
                <br />
                On Confirming Your Order will be placed on checkout page
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  onClick={() => {
                    this.props.onAddToCartHandler({
                      pizza: this.state.pizzaOrder
                    });
                    this.toggle();
                    this.reseter();
                  }}
                >
                  Confirm
                </Button>
                <Button color="secondary" onClick={this.toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </div>
          <Row>
            <Col style={{ textAlign: "center" }} md={{ size: 6, offset: 3 }}>
              <Button
                style={{ margin: "16px" }}
                id="pepperoni"
                onClick={this.addTopping}
                name="Pepperoni"
              >
                Pepperoni
              </Button>
              <Button
                style={{ margin: "16px" }}
                id="oregano"
                onClick={this.addTopping}
                name="Oregano"
              >
                Oregano
              </Button>
              <Button
                style={{ margin: "16px" }}
                id="olive"
                onClick={this.addTopping}
                name="Olive"
              >
                Olive
              </Button>
              <Button
                style={{ margin: "16px" }}
                id="mushroom"
                onClick={this.addTopping}
                name="Mushroom"
              >
                Mushroom
              </Button>
            </Col>
          </Row>
          <Row>
            <Col style={{ textAlign: "center" }} md={{ size: 6, offset: 3 }}>
              <Button
                style={{ margin: "16px", marginTop: "0px" }}
                onClick={this.toggle}
              >
                Done
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
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
export default connect(mapStateToProps, mapDispatchToProps)(PizzaBuilder);
