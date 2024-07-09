import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={FirstPage} />
        <Route path="/second-page" component={SecondPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;