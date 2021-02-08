import { ILogin } from "../../models/login/ILogin";

const initialState: ILogin = {
  userName: "",
  isAuthenticated: false,
};

export const loginReducer = (
  state: ILogin = initialState,
  action: any
): ILogin => {
  switch (action.type) {
    case "SET_AUTH_DETAILS":
      return {
        ...state,
        userName: action.payload.userName,
        isAuthenticated: action.payload.isAuthenticated,
      };
    default:
      return state;
  }
};
