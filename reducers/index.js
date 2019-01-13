import {RECEIVE_DECKS, ADD_QUESTION, ADD_DECK} from '../actions';

export default function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: []
        }
      };
    case ADD_QUESTION:
      const newQuestions = state[action.deckTitle].questions.push({
        question: action.question,
        answer: action.answer
      });

      return {
        ...state,
        [action.deckTitle]: {
          ...action.deckTitle,
          questions: newQuestions
        }
      };
    default:
      return state;
  }
}
