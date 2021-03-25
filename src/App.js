import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import PageNotFound from './components/pages/PageNotFound'
import data from './sampleData';
import Home from './components/pages/Home'
/* import {boardsRef, listsRef, cardRef} from './firebase' */


 class App extends React.Component {
  state = {
    boards: []
  }
  componentDidMount()
  {
    this.setState({ boards: data.boards })
   
  }

  createNewBoard = board => 
  {
    this.setState({boards: [...this.state.boards, board]} )
  }

  render()
  {
    return(
      <div>
        <BrowserRouter>
        <Switch>
            <Route 
            exact 
            path="/:userId/boards" 
            render={(props) => (
              <div>
                <Home 
                {...props}
                boards = {this.state.boards} createNewBoard = {this.createNewBoard}/>
              </div>
            )}
            />

            <Route 
            path="/board/:boardId"
            render = {props => (
              <div>
                <Board
                {...props}
                />
              </div>
            )}
            />

            <Route component={PageNotFound}/>
  {/*           <Home boards = {this.state.boards} createNewBoard = {this.createNewBoard}/>
            <Board/> */}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App
