import { useState, useEffect } from 'react';
import './login.css'


function Login(props) {

    const [email, setEmail] = useState('');
    const [passwd, setPasswd] = useState('');
    const [isValid, setValid] = useState(false);
    const [timer, setTimer] = useState('');
    // [previousvalue, callbackfun]
    // Synthetic events
    // two way data binding
    useEffect(() => {
        console.log('empty array')
        document.title = "login";
        setTimer(new Date().toString())
    }, []);


    useEffect(() => {
        const clock = setInterval(() => {
            console.log('running')
            setTimer(new Date().toString());
        }, 1000);

        return () => {
            clearInterval(clock);
        }

    }, []);

    useEffect(() => {
        // props.isLogIn(false);
        fetch('http://localhost:3000/login')
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    return response.json()
                }
                return false;
            })
            .then((response) => {
                if (response) {
                    props.makeUserLogin(response.isLogin);
                }
            });

    }, [props]);

    useEffect(() => {


        if ((email.includes('@') && passwd.length > 4)) {
            setValid(true);
        } else {
            setValid(false);
        }

    }, [email, passwd]);

    useEffect(() => {

        return () => {
            // alert('logged in')
        };


    }, []);



    const emailHandler = (e) => {
        console.log(e)
        setEmail(e.target.value);
    }

    const passwdHandler = (event) => {
        setPasswd(event.target.value);
    }

    const loginHandler = (event) => {
        event.preventDefault();
        // console.log(email, passwd)
        if (email && passwd && isValid) {


            fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ isLogin: true })
            }).then((response) => {

                if (response.status === 201) {
                    return response.json()
                }
                return false;
            })
                .then((response) => {
                    if (response) {
                        props.makeUserLogin(response.isLogin);
                    }
                });

        }

    }

    return (<div className="login">
        <div>Time: {timer} </div>
        <form onSubmit={loginHandler}>
            <label>Enter email:
                <input type="text" placeholder="email" value={email} onChange={emailHandler} />

            </label>

            <label>Enter password:
                <input type="password" placeholder="password" value={passwd} onChange={passwdHandler} />
            </label>
            {isValid ? <button>Submit</button> : <button disabled={true}>Submit</button>}

        </form>
    </div>);
}

export default Login;