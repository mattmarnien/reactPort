import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Portfolio from './Components/Portfolio/Portfolio';
import About from './Components/About/about';
import Nav from './Components/Nav/nav';
import Footer from './Components/Footer/footer'

function App() {
  return (
    <>
    <Nav />
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Portfolio} />
      <Route exact path ="/about" component={About} />
    </Switch>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
