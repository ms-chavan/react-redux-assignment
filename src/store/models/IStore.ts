import { IDashboard } from "./dashboard/IDashboard";
import { ILogin } from "./login/ILogin";
import { IUsersRegister } from "./registration/IUsersRegister";

export interface IStore {
  registration: IUsersRegister;
  login: ILogin;
  dashboard: IDashboard;
}
