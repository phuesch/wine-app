import React, { useState } from "react";
import "./App.css";
import DetailPageUpdate from "./detail-page";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import OverviewPage from "./overview-page";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/details/:wineID">
            <DetailPageUpdate />
          </Route>
          <Route path="/">
            <OverviewPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
