import React from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "../pages/SignIn/SignIn";
import CreateAccount from "../pages/CreateAccount/CreateAccount";
import { HomePage, Product, Checkout, MyOrders, SearchPage } from "../pages";
import Favorites from "../pages/Favorites/Favorites";
import Cart from "../pages/Cart/Cart";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/signin" component={SignIn} />
      <Route path="/createaccount" component={CreateAccount} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/cart" component={Cart} />
      <Route path="/product/:id" component={Product} />
      <Route path="/sheckout" component={Checkout} />
      <Route path="/orders" component={MyOrders} />
      <Route
        path="/search/:name"
        render={props => {
          const {
            match: {
              params: { name }
            }
          } = props;

          function handleCardClick(id) {
            props.history.push(`/product/${id}`);
          }
          return <SearchPage name={name} handleCardClick={handleCardClick} />;
        }}
      />
    </Switch>
  );
}
