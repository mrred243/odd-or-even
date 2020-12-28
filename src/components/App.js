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
import '../index.scss';


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
      <div style={{height: '100%'}}>
          <div className="header">
            <h1>Odds and Evens</h1>
          </div>
          <div className="main">
          <Instructions/>
          {
            this.props.gameStarted ? (
              <div className="item section__game">
                  <div style={{width: '50%'}} >
                  <h3><strong>Game is on!</strong></h3>
                  <button onClick={this.props.cancelGame}>Cancel Game</button>
                  <GameState />
                  <Guess />
                  <br/>
                  <Drawcard />
                  </div>
                  <Card />
              </div>
            ) : (
              <div className="item">
                  <h3><strong>New game awaits</strong></h3>
                  <br/ >
                  <button onClick={this.startGame}>Start Game</button>
              </div>
            )
          }
          </div>
          <div className="footer" >
              <p style={{marginTop: 15, fontSize: 12}}>Code with ❤️ by Thien-An Tran.</p>
          </div>
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
