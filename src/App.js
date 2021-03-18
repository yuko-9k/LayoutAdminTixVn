import "./App.css";
import { Switch, Route } from "react-router-dom";
import { routesHome, routesAdmin } from "./routes/index";
import HomeTemplate from "./container/HomeTemplate";
import AdminLayout from "./container/AdminTemplate";
import LoginPage from "./container/AdminTemplate/AuthPage";
import PageNotFound from "./container/HomeTemplate/PageNotFound/index";
import RegisterPage from "./container/AdminTemplate/RegisterPage";

function App() {
  const showLayoutHome = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };
  const showLayoutAdmin = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AdminLayout
            exact={item.exact}
            path={item.path}
            Component={item.component}
            key={index}
          />
        );
      });
    }
  };
  return (
    <Switch>
      {showLayoutHome(routesHome)}
      {showLayoutAdmin(routesAdmin)}
      <Route path="/login" component={LoginPage} />
      <Route path="/RegisterPage" component={RegisterPage} />
      <Route path="" component={PageNotFound} />
    </Switch>
  );
}

export default App;
// import { Route, Switch, withRouter } from "react-router-dom";
// import React, { Component } from 'react'
// import { routesHome, routesAdmin } from "./routes";
// import HomeTemplate from "./container/HomeTemplate";
// export default class App extends Component {
//   showLayoutHome = (routes) => {
//     if (routes && routes.length > 0) {
//       return routes.map((item, index) => {
//         return <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />
//       });
//     }
//   }
//   render() {
//     return (
//       <Switch>
//         {this.showLayoutHome(routesHome)}
//       </Switch>
//     )
//   }
// }
