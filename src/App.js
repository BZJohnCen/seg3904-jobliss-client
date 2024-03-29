import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import Home from './pages/Home/home'
import SearchResults from './pages/Results/search-results'
import { Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <ToastContainer />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={SearchResults} />
        </Switch>
      </div>
    </div>
  );
}

export default App;