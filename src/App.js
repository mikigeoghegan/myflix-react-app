import React from 'react';
import { Switch, Route } from 'react-router-dom'
import TopRated from './components/AllMovies';
import SingleMovie from './components/SingleMovie'
import NavBar from './components/NavBar'


function App() {
  return (
    <div className="app">
      <h1>My React App</h1>
      {/* <NavBar /> */}
{/*       <Switch>
        <Route path="/" component={TopRated} exact />
        <Route exact path='/:movieId' component ={SingleMovie}/> 
      </Switch> */}
    </div>
  );
}

export default App;