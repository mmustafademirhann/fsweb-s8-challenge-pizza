import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import OrderPizza from "./pages/OrderPizza";
import Success from "./pages/Success";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  const [orderData, setOrderData] = useState(null);

  return (
    <Router>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order">
          <OrderPizza setOrderData={setOrderData} />
        </Route>
        <Route path="/success">
          <Success orderData={orderData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;