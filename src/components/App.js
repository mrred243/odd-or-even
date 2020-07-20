import React, { Component } from 'react';
import { connect} from 'react-redux';
import { startGame, cancelGame } from '../actions/settting.js';
import { fetchNewDeck } from '../actions/deck.js';
import fetchStates from '../reducers/fetchStates';
import Instructions from './Instructions';
import Drawcard from './Drawcard';
import Card from './Card';
import Guess from './Guess';
import GameState from './GameState';


class App extends Component {
    startGame = () => {
      this.props.startGame();
      this.props.fetchNewDeck();
    }




  render() {
    console.log('this ', this);

    if (this.props.fetchStates === fetchStates.error) {
        return (
          <div>
              <p>Please try to loading the app. An error occurs</p>
              <p>{this.props.message}</p>
          </div>
          )
    }

    return (
      <div>
          <h2>Evens and Odds</h2>
          {
            this.props.gameStarted ? (
              <div>
                  <h3>Game is on.</h3>
                  <br/>
                  <GameState />
                  <br/>
                  <Guess />
                  <br/>
                  <Drawcard />
                  <hr/>
                  <Card />
                  <hr/>
                  <button onClick={this.props.cancelGame}>Cancel Game</button>
              </div>
            ) : (
              <div>
                  <h3>New game awaits</h3>
                  <br/ >
                  <button onClick={this.startGame}>Start Game</button>
              </div>
            )
          }
          <br/>
          <Instructions/>
      </div>
    );
  }
}

const mapStateToProps = state => {

  const {
    settings: { gameStarted },
    deck: { fetchStates, message }
  } = state;

  return { gameStarted, fetchStates, message };

}

// const mapDispatchToProps = dispatch => {
//   return {
//     startGame: () => dispatch(startGame()),
//     cancelGame: () => dispatch(cancelGame()),
//     fetchNewDeck: () => fetchNewDeck(dispatch)
//   }
// }



const componentConnector = connect(mapStateToProps,
  { startGame, cancelGame, fetchNewDeck }
  );
export default componentConnector(App);
