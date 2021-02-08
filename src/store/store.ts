import { IStore } from "./models/IStore";
import reducer from "./reducers/rootReducer";
import { createStore, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";

// eslint-disable-next-line import/no-anonymous-default-export
export default (): Store<IStore> => {
  const store: Store<IStore> = createStore(reducer, composeWithDevTools());
  return store;
};
