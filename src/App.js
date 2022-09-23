import logo from './logo.svg';
import './App.css';
import Movies from './components/movies/movies';
import Login from './components/login/login';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Login/>
      <Movies/>
    </div>
  );
}


export default App;

