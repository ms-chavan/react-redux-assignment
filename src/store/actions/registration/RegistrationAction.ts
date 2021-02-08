import { IUsersRegister } from "../../models/registration/IUsersRegister";

export class RegistrationAction {
  public static updateRegister = (data: any) => {
    return {
      type: "UPDATE_REGISTER",
      payload: data,
    };
  };

  public static setRegister = (data: IUsersRegister[]) => {
    return {
      type: "SET_REGISTER",
      payload: data,
    };
  };
}
