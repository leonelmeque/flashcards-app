import { ADD_DECKS, ADD_DECK, ADD_QUESTION } from "../actions/decks";

export default function decks(state = {}, action) {
  switch (action.type) {
    case ADD_DECKS:
      return {
        ...state,
        ...action.decks,
      };

    case ADD_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: [],
          color : '#'+Math.random().toString(16).substr(-6)
        },
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.title]: {
          ...state[action.title],
          questions: state[action.title].questions.concat([action.question]),
        },
      };

    default:
      return state;
  }
}
