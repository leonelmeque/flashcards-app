
/**
 * Action Types
 */
export const ADD_DECKS = "ADD_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_QUESTION = "ADD_QUESTION";

/**
 * Actions
 */

/**
 * Adding database decks to store
 */
export const receiveDecks = (decks) => {
  return {
    type: ADD_DECKS,
    decks,
  };
};

/**
 * Adding new deck to store
 */
export const addDeck = (title) => {
  return {
    type: ADD_DECK,
    title,
  };
};

/**
 * Adding a question to deck
 */
export const newQuestion = (title, question) => {
  return {
    type: ADD_QUESTION,
    title,
    question,
  };
};

/**
 * Async Action Creators
 */

export function pushDeck(deck) {
  return (dispatch) => {
    dispatch(addDeck(deck));
  };
}

export function pushQuestion(id, question) {
  return (dispatch) => {
    dispatch(newQuestion(id, question));
  };
}
