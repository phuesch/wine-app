import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetailPage from "./pages/detail-page";
import OverviewPage from "./pages/overview-page";
import ShoppingCartPage from "./pages/shopping-cart-page";
import PurchaseHistoryPage from "./pages/purchase-history-page";
import styled from "styled-components";
import Header from "./components/header";
import Footer from "./components/footer";

const MainWrapper = styled.div`
  font-family: MADE Bon Voyage;
  background-image: url("/pictures/background-image.jpg");
`;

function App() {
  return (
    <MainWrapper>
      <Header />
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/details/:wineID">
              <DetailPage />
            </Route>
            <Route path="/shoppingCart">
              <ShoppingCartPage />
            </Route>
            <Route path="/purchaseHistory">
              <PurchaseHistoryPage />
            </Route>
            <Route path="/">
              <OverviewPage />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
      <Footer />
    </MainWrapper>
  );
}

export default App;
