import React from 'react';
import './App.css';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Home from './pages/home.js';
import Project from './pages/project.js';
import Contact from './pages/contact.js';
import Education from './pages/education.js';

function App() {
  return (
    <div>
       <BrowserRouter>
        <Switch>
          <Route exact path="/">
                            <Home/>
                        </Route>
          <Route exact path="/education">
                             <Education/>
                            </Route>
          <Route exact path="/contact">
              <Contact />
          </Route>
          <Route exact path="/projects">
              <Project  />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
