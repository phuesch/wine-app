import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetailPage from "./pages/detail-page";
import OverviewPage from "./pages/overview-page";
import ShoppingCartPage from "./pages/shopping-cart-page";
import PurchaseHistoryPage from "./pages/purchase-history-page";
import styled, { ThemeProvider } from "styled-components";
import Header from "./components/header";
import Footer from "./components/footer";
import theme from "./theme";

const MainWrapper = styled.div`
  font-family: ${(props) => props.theme.mainWrapper.fontFamily};
  background-image: ${(props) => props.theme.mainWrapper.backgroundImage};
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
