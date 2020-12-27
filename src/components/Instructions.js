import React from 'react' ;
import { expandInstructions, cancelInstructions } from '../actions/settting.js';
import {connect} from 'react-redux';

const Instructions = props => {
  const { instructionsExpanded, expandInstructions, cancelInstructions } = props;

  if (instructionsExpanded) {
    return (
      <div className="instruction">
          <h3><strong>Instructions</strong></h3>
          <br/>
          <p>Welcome to Evens and Odds.</p>
          <p>The desk is shuffled. Then choose: Will the next card be even or odd?</p>
          <p>Make a choice on every draw, and see how many you get right.</p>
          <p>Face cards won't count</p>
          <br/>
          <button onClick={cancelInstructions}>Show less</button>
      </div> )
    }
    return (
      <div className="instruction">
          <h3><strong>Instructions</strong></h3>
          <br/>
          <p>Welcome to Evens and Odds...</p>
          <br/>
          <button onClick={expandInstructions}>Read more</button>
      </div>
    )
}



export default connect(
  state => ({ instructionsExpanded: state.settings.instructionsExpanded}),
  {expandInstructions, cancelInstructions})
(Instructions);
