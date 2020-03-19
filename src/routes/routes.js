import React, { useState, useMemo } from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "../pages/SignIn/SignIn";
import CreateAccount from "../pages/CreateAccount/CreateAccount";
import { HomePage, Product, Checkout, MyOrders, SearchPage } from "../pages";
import Favorites from "../pages/Favorites/Favorites";
import Cart from "../pages/Cart/Cart";
import { UserContext } from "./UserContext";

export default function Routes() {
  const [user, setUser] = useState(false);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <Switch>
      <UserContext.Provider value={value}>
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
      </UserContext.Provider>
    </Switch>
  );
}
