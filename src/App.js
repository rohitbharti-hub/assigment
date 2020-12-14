import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/header'
import Home from './components/pages/home'
import MyPortfolio from './components/pages/myportfolio'
import Clients from './components/pages/clients'
import GetInTouch from './components/pages/getInTouch'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/home" exact>
            <Home />
          </Route>

          <Route path="/myportfolio">
            <MyPortfolio />
          </Route>

          <Route path="/clients">
            <Clients />
          </Route>
          
          <Route path="/GetInTouch">
            <GetInTouch />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
