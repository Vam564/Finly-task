import logo from './logo.svg';
import './App.css';
import Comment from './components/Comments/Comment'
import Next from './components/Next/Next'
import Header from './components/Headers/Header'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Comment />
      {/* <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/next/:id" exact component={Next} />
        </Switch>
      </Router> */}

    </div>
  );
}

export default App;
