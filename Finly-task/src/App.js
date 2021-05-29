import logo from './logo.svg';
import './App.css';
import Comment from './components/Comments/Comment'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Comment />
    </div>
  );
}

export default App;
