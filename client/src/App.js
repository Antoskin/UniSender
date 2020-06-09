import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import UserList from './components/UserList'
import UserCard from './components/UserCard'
import UserState from './components/UserState'

function App() {
  return (
      <UserState>
          <Router>
              <Switch>
                  <Route path='/' exact component={UserList}/>
                  <Route path='/user:id' component={UserCard}/>
              </Switch>
          </Router>
      </UserState>
  );
}

export default App;
