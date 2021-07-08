import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import { persistReducer } from "redux-persist";

//It tells the browser to use localStorage as my default storage
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root", //from where we want to store
  storage: storage,
  whitelist: ["login"] //only reducer that we want to persist
};

const rootReducer = combineReducers({ login: loginReducer });
export default rootReducer;
// export default persistReducer(persistConfig, rootReducer);
