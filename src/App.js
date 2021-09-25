import React from 'react';
import { Switch, Route } from 'react-router-dom'
import TopRated from './components/AllMovies';
import SingleMovie from './components/SingleMovie'


function App() {
  return (
    <div className="app">
      <h1>mytheresa react app</h1>
{/*       <Switch>
        <Route path="/" component={TopRated} exact />
        <Route exact path='/:movieId' component ={SingleMovie}/> 
      </Switch> */}
    </div>
  );
}

export default App;