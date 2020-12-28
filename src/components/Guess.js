import React from 'react';
import { connect } from 'react-redux';
import { setGuessEven, setGuessOdd } from '../actions/guess';

const Guess = ({ guess, setGuessEven, setGuessOdd }) => {
  return (
    <div>
      <h3>Will it be even or odd?</h3>
      <div>
        <button
          onClick={setGuessEven}
          style={guess === 'even' ? { border: '1.5px solid rgba(30, 132, 242, 1)'} : null}
        >Even</button>
        {' '}
        <button
          onClick={setGuessOdd}
          style={guess === 'odd' ? { border: '1.5px solid rgba(30, 132, 242, 1)'} : null}
        >Odd</button>
      </div>
    </div>
  )
}

export default connect(
  ({ gameState: { guess } }) => ({ guess }),
  { setGuessEven, setGuessOdd }
)(Guess);
