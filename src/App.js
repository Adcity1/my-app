import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import AboutUs from './components/pages/AboutUs';

function App() {
  return (
  <>
      <Router>
      <NavBar />
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={AboutUs} />
      <Route path='/Services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
      </Switch>
      </Router>
      </>
  );
}

export default App;
