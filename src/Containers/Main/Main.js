import React, { Component } from "react";
import { Row, Col, Container, Button } from "reactstrap";
import classes from "./Main.module.css";
// import pizza from "../../Images/pizza.jpg";
// import pizzaImage from "../../Images/Pizza.png";
import pizzaSVG from "../../Images/pizza.svg";
// import burger from "../../Images/burger.jpg";
// import burgerImage from "../../Images/Burger.png";
import burgerSVG from "../../Images/burger.svg";
import { Spring } from "react-spring/renderprops";
export default class Main extends Component {
  state = {
    mouseHoverBurger: false,
    mouseHoverPizza: false,
  };

  mouseHoverBurgerHandler = () => {
    this.setState({ mouseHoverBurger: !this.state.mouseHoverBurger });
  };

  mouseHoverPizzaHandler = () => {
    this.setState({ mouseHoverPizza: !this.state.mouseHoverPizza });
  };

  letsBuildBurgerHandler = () => {
    this.props.history.push("/burgerbuilder");
  };

  letsBuildPizzaHandler = () => {
    this.props.history.push("/pizzabuilder");
  };

  render() {
    var burgerShelf = (
      <div className={classes.a}>
        <div>
          <img src={burgerSVG} alt="burger here"></img>
        </div>
        <Button id="b" className={classes.hoverDiv}>
          Lets Build Burger
        </Button>
      </div>
    );

    var pizzaShelf = (
      <div className={classes.a}>
        <div>
          <img src={pizzaSVG} alt="pizza here"></img>
        </div>
        <Button id="b" className={classes.hoverDiv}>
          Lets Build Pizza
        </Button>
      </div>
    );

    console.log(this.state);

    return (
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {(props) => (
          <div style={props}>
            <div>
              <Container fluid={true}>
                <Row className={classes.rowStyle}>
                  <Col className={classes.shelf} sm={12} md={6}>
                    {pizzaShelf}
                  </Col>

                  <Col className={classes.shelf} sm={12} md={6}>
                    {burgerShelf}
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        )}
      </Spring>
    );
  }
}
