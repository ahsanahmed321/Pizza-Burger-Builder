import React from "react";

export default function SideDrawer() {
  return (
    <div>
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
    </div>
  );
}
