import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import ShopPage from './components/ShopPage'; 
import About from './components/About'; 
import Contact from './components/Contact'; 
import Cart from './components/Cart'; 


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/Shop" component={ShopPage} />
          <Route path="/Contact" component={Contact} />
          <Route path="/About" component={About} />
          <Route path="/Cart" component={Cart} />

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
