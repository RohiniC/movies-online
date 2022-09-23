import { useState } from 'react';
import './login.css'


function Login() {
    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    // [previousvalue, callbackfun]
    // Synthetic events
    // two way data binding

    const emailHandler = (e) => {
        console.log(e)
        setEmail(e.target.value);
    }

    const passwdHandler = (event) => {
        setPasswd(event.target.value);
    }

    const loginHandler = (event) => {
        event.preventDefault();
        console.log(email, passwd)
    }
    
    return (<div className="login">
        <form onSubmit={loginHandler}>
            <label>Enter email:
                <input type="text" placeholder="email" value={email} onChange={emailHandler} />

            </label>
            
            <label>Enter password:
                <input type="password" placeholder="password" value={passwd} onChange={passwdHandler}/>
            </label>
            <button>Submit</button>
        </form>
    </div>);
}

export default Login;