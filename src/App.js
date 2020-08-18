import React from 'react';
import './App.css';
import Home from './container/Home';
import Header from './components/Header';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import contact from './components/contact';
import Card from './components/logoCard';
import logo from './logo.svg';
function App() {
  return (
   <Router> 
    <div className="App">
       <Header/>
       <Card/>
       <Route path="/" exact component={Home}/>
       <Route path="/:paramId" exact component={Home}/>
       <Route path="/contact" exact component={contact}/>
    </div>
    </Router>
  );
}

export default App;
