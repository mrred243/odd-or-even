import { SET_GAME_STARTED, SET_INSTRUCTIONS_EXPANDED } from '../actions/types.js';
import fetchStates from './fetchStates';


const DEFAULT_SETTING = {
    gameStarted: false,
    instructionsExpanded: false
};


const settingsReducer = (state = DEFAULT_SETTING, action) => {

    switch(action.type){
      case(SET_GAME_STARTED):
          return { ...state, gameStarted : action.gameStarted};
      case(SET_INSTRUCTIONS_EXPANDED):
          return { ...state, instructionsExpanded: action.instructionsExpanded};
      default:
          return state;
    }
};

export default settingsReducer;
