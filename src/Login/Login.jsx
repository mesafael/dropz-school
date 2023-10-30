import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCoffee } from '@fortawesome/free-solid-svg-icons'

import './Login.scss'
import Logo from '../images/logo.png';
import LoginImg from '../images/login.png';


export const Login = () => {
    return (
        <>
            <div className='container'>
                <div className='wrapper wrapper--login'>
                    <div className='LoginImg'>
                        <img src={LoginImg} alt="Login" title='Login' />
                    </div>
                    <div className='form'>
                        <img src={Logo} alt="logo" title='logo' />
                        <h1>Welcome</h1>
                        <form action="post" method="post">
                            <input type="text" placeholder="Username" name="login" id="login" />
                            <input type="text" placeholder="Password" name="password" id="password" />
                            <FontAwesomeIcon icon={faCoffee} />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
