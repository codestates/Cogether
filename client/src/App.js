import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav';
import Main from './pages/Main';
import Setting from './pages/Setting';
import Write from './pages/Write';

function App() {
  return (
    <BrowserRouter>
      <div className="appContainer">
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route exact path='/write'>
            <Write />
          </Route>
          <Route exact path='/setting'>
            <Setting />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
