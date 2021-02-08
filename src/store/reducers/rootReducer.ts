import { combineReducers } from "redux";
import { dashboardReducer } from "./dashboard/DashboardReducer";
import { loginReducer } from "./login/LoginReducer";
import { registrationReducer } from "./registration/RegistrationReducer";

// eslint-disable-next-line import/no-anonymous-default-export
export default combineReducers({
  registration: registrationReducer,
  login: loginReducer,
  dashboard: dashboardReducer,
});
