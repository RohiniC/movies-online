import logo from './logo.svg';
import './App.css';
import Movies from './components/movies/movies';
import Login from './components/login/login';
import { useState } from 'react';

function App() {
  const [login, setLogin] = useState();

  const loginHandler = (userloggedIn) => {
    setLogin(userloggedIn);
  }
  // let content;

  // if (login) {
  //   content = <Movies />;
  // } else {
  //   content = <Login isLogIn={loginHandler} />
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      {
        !login && <Login makeUserLogin={loginHandler} />
      }

      {
        login && <Movies />
      }


      {/* {
        login ? <Movies /> : <Login isLogIn={loginHandler} />
      } */}

      {/* {content} */}

    </div>
  );
}


export default App;

