import React from "react";
import "./App.css";
import PizzaBuilder from "./Containers/PizzaBuilder/PizzaBuilder";
import BurgerBuilder from "./Containers/BurgerBuilder/BurgerBuilder";
import CheckOut from "./Containers/Checkout/Checkout";
import Main from "./Containers/Main/Main";
import Layout from "./Hoc/Layout/Layout";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import SmokeElement from "smoke-effect-react";
import smoke from "./Images/Smoke-Element.png";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Route exact path="/" component={Main} />
        <Route exact path="/pizzabuilder" component={PizzaBuilder} />
        <Route exact path="/burgerbuilder" component={BurgerBuilder} />
        <Route exact path="/checkout" component={CheckOut} />
      </Layout>
      <div className="smoke">
        <SmokeElement smokeSrc={smoke} smokeOpacity="0.2" />
      </div>
    </BrowserRouter>
  );
}

export default App;
