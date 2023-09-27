import './App.css'

function App()
{
    return (
        <div id="main-container" className='flex center'>
            <form action="login" method="post" className='flex cols'>
                <p>Email:</p>
                <input type="email" name="user-email" id="user-email" />
                <p>Password:</p>
                <input type="password" name="user-password" id="user-password" />
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default App