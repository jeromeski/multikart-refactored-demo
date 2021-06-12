import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore } from "redux";

import App from "./components/App";
import Landing from "./components/pages/Landing";


const store = createStore(() => {})

function Root() {
  return(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Landing}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Root />
  </StrictMode>,
  rootElement
);
