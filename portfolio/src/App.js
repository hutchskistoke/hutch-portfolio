
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Nav from './Screens/Nav'
import Home from './Screens/Home'
import Portfolio from './Screens/Portfolio.jsx'
import About from './Screens/About'
import Contact from './Screens/Contact'
import Resume from './Screens/Resume'

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path='/portfolio'>
          <Portfolio />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/resume'>
          <Resume />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
