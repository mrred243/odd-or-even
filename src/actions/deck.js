import { DECK, DECK_DRAW } from './types';

export const fetchDeckSuccess = deckJson => {
  const { remaining, deck_id } = deckJson;
  return { type: DECK.FETCH_SUCCESS, deck_id, remaining};
};

const API_ADDRESS = 'https://deck-of-cards-api-wrapper.appspot.com';


export const fetchDeckError = (error) => {
  return {type: DECK.FETCH_ERROR, message: error.message}
};

export const fetchNewDeck = () => (dispatch) => {
  fetch('https://deckofcardsapi.com/api/deck/new/shuffle/')
  .then(res => {
    if (res.status !== 200) {
      throw new Error('Unsuccessful request to deckofcardsapi.com')
    }
      return res.json()
    })
  .then(json => dispatch(fetchDeckSuccess(json)))
  .catch(err => dispatch(fetchDeckError(err)))
  ;
}

export const fetchNewCard = deck_id => (dispatch) => {

  return fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw`)
  .then(res => {
      if (res.status !== 200) {
        throw new Error('Unsuccessful request to deckofcardsapi.com')
      }
        return res.json()
      })
  .then(json => {
        dispatch({
          type: DECK_DRAW.FETCH_SUCCESS,
          remaining: json.remaining,
          cards: json.cards
        });

  }

  )
  .catch(err => dispatch({ type: 'DECK_DRAW.FETCH_ERROR', message: err.message}))
  ;
}
