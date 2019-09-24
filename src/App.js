import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './pages/home'
import SearchResults from './pages/search-results'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div className="App-header">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={SearchResults} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
