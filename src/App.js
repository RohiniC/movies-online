import logo from './logo.svg';
import './App.css';
import Movies from './components/movies/movies';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Movies/>
    </div>
  );
}


export default App;

