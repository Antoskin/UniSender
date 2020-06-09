import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import UserList from './components/UserList'
import UserCard from './components/UserCard'

function App() {
  return (
    <div className="App container">
      <Router>
          <Switch>
              <Route path='/' exact component={UserList} />
              <Route path='/user:id' component={UserCard} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
