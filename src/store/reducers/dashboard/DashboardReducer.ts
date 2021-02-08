import { IDashboard } from "../../models/dashboard/IDashboard";

const initialState: IDashboard = {
  formattedTime: "0 minutes : 0 seconds",
  totalSeconds: 0,
};

export const dashboardReducer = (
  state: IDashboard = initialState,
  action: any
): IDashboard => {
  switch (action.type) {
    case "SET_TIME":
      return {
        ...state,
        totalSeconds: action.payload.totalSeconds,
        formattedTime: action.payload.formattedTime,
      };
    default:
      return state;
  }
};
