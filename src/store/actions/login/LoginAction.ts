import { ILogin } from "../../models/login/ILogin";

export class LoginAction {
  public static setAuthDetails = (data: ILogin) => {
    return {
      type: "SET_AUTH_DETAILS",
      payload: data,
    };
  };
}
