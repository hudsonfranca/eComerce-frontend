import React from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "../pages/SignIn/SignIn";
import CreateAccount from "../pages/CreateAccount/CreateAccount";
import Index from "../pages/Index/index";
import Favorites from "../pages/Favorites/Favorites";
import Cart from "../pages/Cart/Cart";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Index} />
      <Route path="/signin" component={SignIn} />
      <Route path="/createaccount" component={CreateAccount} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/cart" component={Cart} />
    </Switch>
  );
}
