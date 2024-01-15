import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./reducers/userReducers";

import {
  subuserLoginReducer,
  subuserRegisterReducer,
  subuserUpdateReducer,
  userPermissionUpdateReducer

} from "./reducers/subuserReducers";






const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userUpdate: userUpdateReducer,

  // subuser Profile
  subuserLogin:    subuserLoginReducer,
  subuserRegister: subuserRegisterReducer,
  subuserUpdate:   subuserUpdateReducer,
  userPermissionUpdate:userPermissionUpdateReducer,
  
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
