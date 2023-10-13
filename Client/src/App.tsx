import './App.css'
import './ConfirmPW.tsx'
import React, {useState} from 'react'

function App()
{
    const [appState, setAppState] = useState("Login");

    var title: string = appState.toUpperCase();

    return (
    <>
        
        <div id="main-container" className='flex center'>
            <div className='header'>    
                <h1>{title}</h1>
            </div>
            <form action="login" method="post" className='flex cols'>
                <p>Email</p>
                <input className='txt-input' type="email" name="user-email" id="user-email" />
                <p>Password</p>
                <input className='txt-input' type="password" name="user-password" id="user-password" />
                <p id='signup'>Sign up</p>
                <div className='flex center' id="button-div">                
                    <input id='submit-button' className='form-btn' type="submit" value="Login" />;
                </div>
            </form>
        </div>
    </>
    )
}

export default App