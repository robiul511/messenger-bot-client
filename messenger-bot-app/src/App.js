// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Views/Home';
import AllMessenger from './Views/AllMessages';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div >
      <Navigation />
      <Switch>
        <Route path="/allMessages">
          <AllMessenger />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
