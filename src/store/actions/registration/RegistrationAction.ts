import { IUsersRegister } from "../../models/registration/IUsersRegister";

export class RegistrationAction {
  
  public static setRegister = (data: IUsersRegister[]) => {
    return {
      type: "SET_REGISTER",
      payload: data,
    };
  };

  public static setSubmitted = (data: boolean) => {
    return {
      type: "SET_SUBMITTED",
      payload: data,
    };
  };

}
