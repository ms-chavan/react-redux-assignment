import { IUsersRegister } from "../../models/registration/IUsersRegister";

const initialState: IUsersRegister = {
  users: [],
};

export const registrationReducer = (
  state: IUsersRegister = initialState,
  action: any
): IUsersRegister => {
  switch (action.type) {
    case "UPDATE_REGISTER":
      return {
        ...state,
        users: action.payload,
      };
    case "SET_REGISTER":
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};
