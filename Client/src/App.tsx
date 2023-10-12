import './App.css'
import './ConfirmPW.tsx'
import React, {useState} from 'react'
import ConfirmPassword from './ConfirmPW.tsx';

function App()
{
    const [appState, setAppState] = useState("Login");

    const handleFormButtons = (e: React.FormEvent) =>
    {
        e.preventDefault();
        
        if(e.currentTarget.id == "register-button")
        {
            if(appState != "Register")
                setAppState("Register");
            else
                console.log("Make Post Request for register");
        }
        else
        {
            if(appState != "Login")
                setAppState("Login");
            else
                console.log("Make Post Request for login");
        }
    }

    const loginButton = <input id='submit-button' onClick={handleFormButtons} className='form-btn' type="submit" value="Login" />;
    const registerButton = <input id='register-button' onClick={handleFormButtons} className='form-btn' type="submit" value="Register" />;

    const buttonArray = [];
    var title: string = appState;

    if(appState == "Login")
    {
        buttonArray[0] = loginButton;
        buttonArray[1] = registerButton;
    }
    else
    {
        buttonArray[1] = loginButton;
        buttonArray[0] = registerButton;
    }

    return (
    <>
        <div className='header'>    
            <h1>{title}</h1>
        </div>
        <div id="main-container" className='flex center'>
            <form action="login" method="post" className='flex cols'>
                <p>Email</p>
                <input className='txt-input' type="email" name="user-email" id="user-email" />
                <p>Password</p>
                <input className='txt-input' type="password" name="user-password" id="user-password" />
                <ConfirmPassword registering={appState}/>
                <div className='flex center' id="button-div">                
                    {buttonArray}
                </div>
            </form>
        </div>
    </>
    )
}

export default App