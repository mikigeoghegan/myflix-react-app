import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import getAllMovies from './components/AllMovies';
import SingleMovie from './components/SingleMovie'
import Wishlist from './components/Wishlist';
import './App.scss'


function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Switch>
        <Route path="/" component={getAllMovies} exact />
        <Route exact path='/:movieId' component ={SingleMovie}/>
        <Route exact path= '/wishlist' component ={Wishlist} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;