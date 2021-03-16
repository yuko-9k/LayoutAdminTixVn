import { combineReducers } from "redux";
import LocationState from "../../components/NavbarHome/modules/reducers";
import BannerState from "../../components/CarouselMovie/modules/reduces";
import listMovieReducer from "../../container/HomeTemplate/HomePage/modules/reducer";
import ContainerMovieState from "../../components/ListMovie/Content/modules/reducers";
import AuthReducer from "../../container/AdminTemplate/AuthPage/modules/reducer";
import {
  UserReducer,
  addNewUserReduce,
} from "../../container/AdminTemplate/UserManager/modules/reducers";
import ChangeUserReducer from "../../components/AdminComponent/PopUp/DialogUpdateUser/modules/reducers";
import DeleteUserReducer from "../../components/AdminComponent/Table/UserTable/modules/reducers";
import {
  getListMovieReducer,
  getListMovieByDateReducer,
} from "../../container/AdminTemplate/MovieManager/modules/reducers";

const rootReducer = combineReducers({
  LocationState,
  BannerState,
  listMovieReducer,
  ContainerMovieState,
  AuthReducer,
  UserReducer,
  addNewUserReduce,
  ChangeUserReducer,
  DeleteUserReducer,
  getListMovieReducer,
  getListMovieByDateReducer,
});
export default rootReducer;
