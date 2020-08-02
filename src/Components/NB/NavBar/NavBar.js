import React from "react";
import { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import Aux from "../../../Hoc/Auxx/Auxx";
import BackDrop from "../../BackDrop/BackDrop";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { Spring } from "react-spring/renderprops";

import navbarPizza from "../../../Images/navbarPizza.svg";
import navbarBurger from "../../../Images/navbarBurger.svg";
import navbarCheckout from "../../../Images/navbarCheckout.svg";

class NavBar extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerHandler = () => {
    this.setState({ showSideDrawer: !this.state.showSideDrawer });
  };

  render() {
    var sidedrawer;

    if (this.state.showSideDrawer) {
      // side drawer when logged out
      sidedrawer = (
        <Aux>
          <BackDrop clicked={this.sideDrawerHandler} />
          <div className={classes.Drawer}>
            <div>
              <Button color="inherit">
                <Link
                  onClick={this.sideDrawerHandler}
                  className={classes.DrawerItem}
                  to="/pizzabuilder"
                >
                  Pizza Builder
                </Link>
              </Button>
            </div>
            <div>
              <Button color="inherit">
                <Link
                  onClick={this.sideDrawerHandler}
                  className={classes.DrawerItem}
                  to="/burgerbuilder"
                >
                  Burger Builder
                </Link>
              </Button>
            </div>
            <div>
              <Button color="inherit">
                <Link
                  onClick={this.sideDrawerHandler}
                  className={classes.DrawerItem}
                  to="/checkout"
                >
                  Checkout
                </Link>
              </Button>
            </div>
          </div>
        </Aux>
      );
    }

    return (
      <Spring
        from={{ marginLeft: -500 }}
        to={{ marginLeft: 0 }}
        config={{ duration: 1000 }}
      >
        {(Props) => (
          <div style={Props}>
            <Aux>
              <Navbar className={classes.NavBar}>
                <NavbarBrand>
                  <Link className={classes.NavBrand} to="/">
                    Spicyyyyy
                  </Link>
                </NavbarBrand>
                <Nav className={classes.NavItems}>
                  <NavItem className="mx-2">
                    <img height={18} src={navbarPizza} />
                    <Button>
                      <Link className={classes.NavItem} to="/pizzabuilder">
                        Pizza Builder
                      </Link>
                    </Button>
                  </NavItem>
                  <NavItem className="mx-2">
                    <Button>
                      <img className="mr-1" height={18} src={navbarBurger} />
                      <Link className={classes.NavItem} to="/burgerbuilder">
                        Burger Builder
                      </Link>
                    </Button>
                  </NavItem>
                  <NavItem className="mx-2">
                    <img height={18} src={navbarCheckout} />
                    <Button>
                      <Link className={classes.NavItem} to="/checkout">
                        Checkout
                      </Link>
                    </Button>
                  </NavItem>
                </Nav>
                <NavItem className={classes.NavMenu}>
                  <Button>
                    <MenuIcon onClick={this.sideDrawerHandler} />
                  </Button>
                </NavItem>
              </Navbar>
              {sidedrawer}
            </Aux>
          </div>
        )}
      </Spring>
    );
  }
}

export default NavBar;
