import './App.css'

function App()
{
    return (
        <div id="main-container" className='flex center'>
            <form action="login" method="post" className='flex cols'>
                <p>Email:</p>
                <input className='txt-input' type="email" name="user-email" id="user-email" />
                <p>Password:</p>
                <input className='txt-input' type="password" name="user-password" id="user-password" />
                <div className='flex center'>                
                    <input id='submit-button' type="submit" value="Login" />
                </div>
            </form>
        </div>
    )
}

export default App