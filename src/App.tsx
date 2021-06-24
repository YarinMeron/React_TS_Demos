import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { IUser } from "./redux/store";
import { fetchUsers } from "./redux/actions/usersActions";
import { Poll } from "./pages/Poll";
import { Dashboard } from "./redux/Dashboard";

import { Switch, Route, Redirect } from "react-router-dom";

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async function () {
      const response = await fetch(
        "https://randomuser.me/api/?results=40&seed=foobar"
      );
      const data = await response.json();
      dispatch(fetchUsers(data.results as IUser[]));
    })();
  }, []);

  return (
    <Switch>
      <Route path={"/dashboard/:name"} component={Dashboard} />
      <Route path={"/dashboard"} component={Dashboard} />
      <Route path={"/poll"} component={Poll} />
      <Route path={"/"}>
        <h1>Main page goes here</h1>
      </Route>
    </Switch>
  );
};

export default App;
