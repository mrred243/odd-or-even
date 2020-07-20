import { DECK, DECK_DRAW } from '../actions/types.js';
import fetchStates from './fetchStates';


const DEFAULT_DECK =   { deck_id : '', remaining : 0, fetchStates: '', message: '', cards: [] };


const deckReducer = (state = DEFAULT_DECK, action) => {
    let remaining, cards, deck_id;
    switch(action.type){
      case(DECK.FETCH_SUCCESS):
          ( { remaining, deck_id } = action )
          return { ... state, remaining, deck_id, fetchStates: fetchStates.success};
      case(DECK.FETCH_ERROR):
          return {...state, message: action.message, fetchStates: fetchStates.error};
      case(DECK_DRAW.FETCH_SUCCESS):
          ( { remaining, cards } = action );
          return {...state, remaining, cards, fetchStates: fetchStates.success}
      case(DECK_DRAW.FETCH_ERROR):
          return {...state, message: action.message, fetchStates: fetchStates.error};
      default:
          return state;
    }
};

export default deckReducer;
