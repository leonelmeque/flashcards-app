import { receiveDecks } from "./decks";
import { PURGE } from "redux-persist";
import { Data } from "../utils/initData";

export function initializeData() {
  return (dispatch) => {
    dispatch(receiveDecks(Data));
  };
}
