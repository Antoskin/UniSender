import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import UserList from './components/UserList'

function App() {
  return (
    <div className="App container">
      <Router>
          <Switch>
              <Route path="/" component={UserList} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
