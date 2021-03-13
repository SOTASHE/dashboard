import Navbar from './components/Navbar';
import Home from './pages/Home';
import MyMenus from './pages/MyMenu';
import Orders from './pages/Orders';
import MenuBuilder from './pages/MenuBuilder/MenuBuilder';
import Designer from './pages/Designer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/menus' component={MyMenus} />
          <Route path='/orders' component={Orders} />
          <Route path='/menu-build' component={MenuBuilder} />
          <Route path='/design' component={Designer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
