import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import themeFile from "./util/theme";
import jwtDecode from "jwt-decode";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";

//Components
import Navbar from "./components/layout/Navbar.js";
import AuthRoute from "./util/AuthRoute";

// Pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
import user from "./pages/user";
import about from "./pages/about";

import axios from "axios";

//TODO: make it yellow or red or dark blue?
const theme = createMuiTheme(themeFile);

axios.defaults.baseURL = "https://us-central1-hwbounty.cloudfunctions.net/api";

const token = localStorage.FBIdToken;
if (token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "#DAE0E6" };
  }

  changeBackgroundColor = (color) => {
    console.log(color);
    this.setState({ color });
  };

  render() {
    return (
      <div
        className="main-background"
        style={{ backgroundColor: this.state.color }}
      >
        <MuiThemeProvider theme={theme}>
          <Provider store={store}>
            <Router>
              <Navbar />
              <Route exact path="/about" component={about} />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={home} />
                  <AuthRoute exact path="/login" component={login} />
                  <AuthRoute exact path="/signup" component={signup} />
                  <Route exact path="/users/:handle" component={user} />
                  <Route
                    exact
                    path="/users/:handle/bounty/:bountyId"
                    component={user}
                  />
                </Switch>
              </div>
            </Router>
          </Provider>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
