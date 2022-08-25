import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import CategoryPage from "./categoryView/CategoryView";
import ProductView from "./productView/ProductView";
import Cart from "./cart/Cart";
import SearchResults from "./SearchResults";

export default function Main() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route
        exact
        path="/product/:categoryName"
        component={CategoryPage}
      ></Route>
      <Route
        exact
        path="/product/:categoryName/:id"
        component={ProductView}
      ></Route>
      <Route exact path="/cart" component={Cart}></Route>
      <Route
        exact
        path="/search/query=:query"
        component={SearchResults}
      ></Route>
    </Switch>
  );
}