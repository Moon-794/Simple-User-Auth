import {FC} from 'react';

interface PWConfirmProps
{
    registering: string;
}

const ConfirmPassword: FC<PWConfirmProps> = ({registering}) =>
{
    if(registering == "Register")
    {
        return(
        <>
            <p>Confirm Password</p>
            <input className='txt-input' type="password" name="confirm-password" id="confirm-password" />
        </>
        )
    }
    else
    {
        return null;
    }
}

export default ConfirmPassword