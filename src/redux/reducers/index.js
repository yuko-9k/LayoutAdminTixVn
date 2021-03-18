import { combineReducers } from "redux";
import LocationState from "../../components/NavbarHome/modules/reducers";
import BannerState from "../../components/CarouselMovie/modules/reduces";
import listMovieReducer from "../../container/HomeTemplate/HomePage/modules/reducer";
import ContainerMovieState from "../../components/ListMovie/Content/modules/reducers";
import AuthReducer from "../../container/AdminTemplate/AuthPage/modules/reducer";
import {
  UserReducer,
  addNewUserReduce,
  findUserReducer,
} from "../../container/AdminTemplate/UserManager/modules/reducers";
import ChangeUserReducer from "../../components/AdminComponent/PopUp/DialogUpdateUser/modules/reducers";
import DeleteUserReducer from "../../components/AdminComponent/Table/UserTable/modules/reducers";
import {
  getListMovieReducer,
  getListMovieByDateReducer,
  addNewMovieReducer,
} from "../../container/AdminTemplate/MovieManager/modules/reducers";
import {
  DeleteMovieReducer,
  ChangeInfoMovieReducer,
} from "../../components/AdminComponent/Table/MovieTable/modules/reducers";
import RegisterUserReducer from "../../container/AdminTemplate/RegisterPage/modules/reducers";

const rootReducer = combineReducers({
  LocationState,
  BannerState,
  listMovieReducer,
  ContainerMovieState,
  AuthReducer,
  UserReducer,
  addNewUserReduce,
  findUserReducer,
  ChangeUserReducer,
  DeleteUserReducer,
  getListMovieReducer,
  getListMovieByDateReducer,
  addNewMovieReducer,
  DeleteMovieReducer,
  ChangeInfoMovieReducer,
  RegisterUserReducer,
});
export default rootReducer;
