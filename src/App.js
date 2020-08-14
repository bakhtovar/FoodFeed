import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './HopePage';
import About from './Components/About';
import Alsham from './Restaraunts/Alsham';
import Segafredo from './Restaraunts/Sefafredo';
import Traktir from './Restaraunts/Traktir';
import Forel from './Restaraunts/Forel';
import Citir from './Restaraunts/Citir';
import Focaccia from './Restaraunts/Focaccia';
import inAsia from './Restaraunts/inAsia';
import Restaraunts from './Components/Restaraunts';
import Bukhoro from './Restaraunts/Bukhoro';
import Bella from './Restaraunts/Bella';
import Salsa from './Restaraunts/Salsa';
import Taj from './Restaraunts/Taj';
import Rahat from './Restaraunts/Rahat';
import Toki from './Restaraunts/Toki';
import Mazza from './Restaraunts/Mazza';
import Contact from './Components/Contact';
import Register from './Components/Registration';
import Login from './Components/Login';
import Profile from './Components/Profile';

function App() {


  return (
    <div>

 <Router>
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/restaraunts/alsham" component={Alsham} />
          <Route path="/restaraunts/segafredo" component={Segafredo} />
          <Route path="/restaraunts/bella" component={Bella} />
          <Route path="/restaraunts/citirusta" component={Citir} />
          <Route path="/restaraunts/foccacia" component={Focaccia} />
          <Route path="/restaraunts/inasia" component={inAsia} />
          <Route path="/restaraunts/bukhoro" component={Bukhoro} />
          <Route path="/restaraunts/traktir" component={Traktir}/>
          <Route path="/restaraunts/forel" component={Forel}/>
          <Route path="/restaraunts/cafemazza" component={Mazza}/>
          <Route path="/restaraunts/salsa" component={Salsa}/>
          <Route path="/restaraunts/rahat" component={Rahat}/>
          <Route path="/restaraunts/toki" component={Toki}/>
          <Route path="/restaraunts/taj" component={Taj}/>
          <Route path="/restaraunts" component={Restaraunts}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/contact-us" component={Contact}/>
          {/* <Route path ="/contact-us" component ={ContactUs}/>
          <Route path="/clothes-for-men" component={ForManPage} />
          <Route path="/clothes-for-women" component={ForWomanPage} />
          <Route path="/clothes-for-children" component={ForChildrenPage} />
          <Route path ="/your-cart" component ={Orders}/>  */}
          
        </Switch>
      </Router>
      </div>
  );
}

export default App;
