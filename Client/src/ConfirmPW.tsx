import {FC} from 'react';

interface PWConfirmProps
{
    registering: string;
}

const ConfirmPassword: FC<PWConfirmProps> = ({registering}) =>
{
    if(registering == "register")
    {
        return(
        <>
            <p>hellohahah</p>
        </>
        )
    }
    else
    {
        return null;
    }
}

export default ConfirmPassword