import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import TopRated from './components/AllMovies';
import SingleMovie from './components/SingleMovie'
import NavBar from './components/NavBar'
import * as movieService from './../services/movie-service'


function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <NavBar />
      <h1>Myflix </h1>
      <Switch>
        <Route path="/" component={TopRated} exact />
        <Route exact path='/:movieId' component ={SingleMovie}/> 
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;