import React, { useState } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import AllMovies from './components/AllMovies/AllMovies';
import SingleMovie from './components/SingleMovie/SingleMovie'
import './App.scss'



function App() {
  const [favourites, setFavourites] = useState([])


  return (
    <div className="app">
      <BrowserRouter>
      <Switch>
        <Route exact path='/:movieId' render={props => (
          <SingleMovie {...props} setFavourites = {setFavourites} favourites = {favourites}/>
        )}/>
        <Route path="/" render={props => (
          <AllMovies {...props} setFavourites = {setFavourites} favourites = {favourites}/>
        )}/>
        
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;