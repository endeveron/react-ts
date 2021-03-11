import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import InfoPage from './pages/InfoPage'
import ToDoPage from './pages/ToDoPage'

const App: React.FunctionComponent = () => {
  
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/" exact component={ToDoPage} />
          <Route path="/info" component={InfoPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
