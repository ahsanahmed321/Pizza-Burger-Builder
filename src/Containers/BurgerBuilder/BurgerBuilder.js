import React from "react";
import { Component } from "react";
import Burger from "../../Components/Burger/Burger";
import { Row, Col, Container, Button } from "reactstrap";
import { connect } from "react-redux";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";

class BurgerBuilder extends Component {
  state = {
    Ingredients: [],
    burgerOrder: {
      Meat: 0,
      Cheese: 0,
      Bacon: 0,
      Salad: 0
    },
    modal: false,
    limitModal: false
  };

  addLayer = e => {
    if (this.state.Ingredients.length < 7) {
      this.setState({
        Ingredients: [...this.state.Ingredients, e.target.id]
      });
      if (e.target.name === "Meat")
        this.setState(prevState => ({
          burgerOrder: {
            ...prevState.burgerOrder,
            Meat: this.state.burgerOrder.Meat + 1
          }
        }));
      if (e.target.name === "Cheese")
        this.setState(prevState => ({
          burgerOrder: {
            ...prevState.burgerOrder,
            Cheese: this.state.burgerOrder.Cheese + 1
          }
        }));
      if (e.target.name === "Bacon")
        this.setState(prevState => ({
          burgerOrder: {
            ...prevState.burgerOrder,
            Bacon: this.state.burgerOrder.Bacon + 1
          }
        }));
      if (e.target.name === "Salad")
        this.setState(prevState => ({
          burgerOrder: {
            ...prevState.burgerOrder,
            Salad: this.state.burgerOrder.Salad + 1
          }
        }));
    } else {
      this.setState({ limitModal: true });
    }
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  limitToggle = () => {
    this.setState({ limitModal: !this.state.limitModal });
  };
  reseter = () => {
    this.setState({
      Ingredients: [],
      burgerOrder: {
        Meat: 0,
        Cheese: 0,
        Bacon: 0,
        Salad: 0
      }
    });
  };

  render() {
    return (
      <div>
        <Modal isOpen={this.state.limitModal} toggle={this.limitToggle}>
          <ModalHeader>Sorry</ModalHeader>
          <ModalBody>Layers Limit Exceeded</ModalBody>
        </Modal>
        <Burger ingredients={this.state.Ingredients} />
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
                      burger: this.state.burgerOrder
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
                id="Meat"
                onClick={this.addLayer}
                name="Meat"
              >
                Meat
              </Button>
              <Button
                style={{ margin: "16px" }}
                id="Cheese"
                onClick={this.addLayer}
                name="Cheese"
              >
                Cheese
              </Button>
              <Button
                style={{ margin: "16px" }}
                id="Salad"
                onClick={this.addLayer}
                name="Salad"
              >
                Salad
              </Button>
              <Button
                style={{ margin: "16px" }}
                id="Bacon"
                onClick={this.addLayer}
                name="Bacon"
              >
                Bacon
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
export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
