import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import getAllMovies from './components/AllMovies';
import SingleMovie from './components/SingleMovie'
import NavBar from './components/NavBar'
import Wishlist from './components/Wishlist';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <NavBar />
      <h1>Myflix </h1>
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