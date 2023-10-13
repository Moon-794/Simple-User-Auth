import './App.css'
import './ConfirmPW.tsx'
import React, {useState} from 'react'
import { CSSTransition } from 'react-transition-group';

function App()
{

    let [mode, setMode] = useState("Login");

    function handleClick(e: React.FormEvent)
    {
        e.preventDefault();
        setMode(mode == "login" ? "register" : "login");
    }

    return (
    <>
        
        <div key="main-con" id="main-container" className={'flex center height-transition' + ' ' + (mode == "register" ? 'height-register' : 'height-login')}>
            <div className='header'>    
                <h1>LOGIN</h1>
            </div>
            <form action="login" method="post" className='flex cols'>
                <p>Email</p>
                <input className='txt-input' type="email" name="user-email" id="user-email" />
                <p>Password</p>
                <input className='txt-input' type="password" name="user-password" id="user-password" />
                {
                    mode == "register" ? (
                    <>
                    <p>Confirm Password</p>
                    <input className='txt-input' type="password" name="confirm-password" id="confirm-password" />
                    </>
                    ) : null
                    
                }
                <p id='signup'>Sign up</p>
                <div className='flex center' id="button-div">                
                    <input id='submit-button' onClick={handleClick} className='form-btn' type="submit" value="Login" />;
                </div>
            </form>
        </div>
    </>
    )
}

export default App