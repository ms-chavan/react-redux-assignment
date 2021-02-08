import { IUser, IUsersRegister } from "../registration/IUsersRegister";
import { ICreds } from "./ICreds";

export interface ILogin {
  userName: string;
  isAuthenticated: boolean;
}
