import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import FCOD2 from './containers/FCOD2/FCOD2';
import FCOD3 from './containers/FCOD3/FCOD3';
import LandingPage from './containers/LandingPage/LandingPage';

function App() {
  return (
    
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage } />
        <Route exact path="/fcod2" component={ FCOD2 } />
        <Route exact path="/fcod3" component={FCOD3} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;