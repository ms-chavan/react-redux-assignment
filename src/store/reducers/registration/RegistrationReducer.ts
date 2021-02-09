import { IUsersRegister } from "../../models/registration/IUsersRegister";

const initialState: IUsersRegister = {
  users: [],
  isSubmitted: false,
};

export const registrationReducer = (
  state: IUsersRegister = initialState,
  action: any
): IUsersRegister => {
  switch (action.type) {
    case "SET_REGISTER":
      return {
        ...state,
        users: action.payload,
      };
      case "SET_SUBMITTED":
        return {
          ...state,
          isSubmitted: action.payload,
        };
    default:
      return state;
  }
};
