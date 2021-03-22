import HomePage from "../container/HomeTemplate/HomePage/index";
import LoginPage from "../container/AdminTemplate/AuthPage/index";
import DashBoard from "../container/AdminTemplate/DashBoard";
import UserManager from "../container/AdminTemplate/UserManager";
import MovieManagerPage from "../container/AdminTemplate/MovieManager";
import RegisterPage from "../container/AdminTemplate/RegisterPage";
import BookingManagerPage from "../container/AdminTemplate/BookingManager";
import TheaterManagerPage from "../container/AdminTemplate/TheaterManager";
const routesHome = [
  {
    exact: true,
    path: "/",
    component: HomePage,
  },
  {
    exact: false,
    path: "/home",
    component: HomePage,
  },
];
const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: DashBoard,
  },
  {
    exact: false,
    path: "/UserManager",
    component: UserManager,
  },
  {
    exact: false,
    path: "/MovieManagerPage",
    component: MovieManagerPage,
  },
  {
    exact: false,
    path: "/BookingManagerPage",
    component: BookingManagerPage,
  },
  {
    exact: false,
    path: "/TheaterManagerPage",
    component: TheaterManagerPage,
  },
];
export { routesHome, routesAdmin };
