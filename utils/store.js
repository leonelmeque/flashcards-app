
import { persistStore, persistCombineReducers } from "redux-persist";
import middleware from "../middleware";
import reducers from "../reducers";
import { createStore } from "redux";
import {AsyncStorage} from 'react-native';

export const ConfigureStore = () => {
  const config = {
    key: "root",
    storage:AsyncStorage,
    debug: true,
  };

  const store = createStore(
    persistCombineReducers(config, reducers),
    middleware
  );

  const persistor = persistStore(store);
  return { persistor, store };
};
