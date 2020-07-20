import React from 'react';
import { connect } from 'react-redux';
import { fetchNewCard } from '../actions/deck';

const Drawcard = ({ deck_id, fetchNewCard }) => {
  console.log('deck_id', deck_id)
  return (
      <div>
          <button onClick={fetchNewCard(deck_id)}>Draw a card!</button>
      </div>
  )
}

const mapDispatchToProps = dispatch => {
    return{
        fetchNewCard: deck_id => () => dispatch(fetchNewCard(deck_id))
    };
}

export default connect(
    ({ deck : {deck_id} }) => ({deck_id}),
    mapDispatchToProps

)(Drawcard);
