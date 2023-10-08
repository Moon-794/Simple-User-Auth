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



    return (
        <div id="main-container" className='flex center'>

            <form action="login" method="post" className='flex cols'>
                <p>Email</p>
                <input className='txt-input' type="email" name="user-email" id="user-email" />
                <p>Password</p>
                <input className='txt-input' type="password" name="user-password" id="user-password" />
                <ConfirmPassword registering={appState}/>
                <div className='flex center'>                
                    <input id='submit-button' onClick={handleFormButtons} className='form-btn' type="submit" value="Login" />
                    <input id='register-button' onClick={handleFormButtons} className='form-btn' type="submit" value="Register" />
                </div>
            </form>
        </div>
    )
}

export default App