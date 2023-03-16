import React from 'react';
import "./Loginform.css";
import Card from "../Card/Card";
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter} from 'react-icons/fa';

const Loginform = () => {
  return <Card>
    <h1 className='title'>Sign In</h1>
    <p className='subtitle'>Please login using your Email and password</p>
    <form>
        <div className='input_Container'>
            <input type="text" placeholder='username'/>
            <input type="password" placeholder='password'/>
        </div>
        <input type='submit' value="Log In" className='login_button' />
    </form>
    <div className='link_container'>
        <a href="" className='small'>
           Forgot password?
        </a>
    </div>
    <div className='icons'><FaGoogle style={{ color: 'white', fontSize: '24px' }} />
    <FaGithub style={{ color: 'white', fontSize: '24px' }} />
    <FaTwitter style={{ color: 'white', fontSize: '24px' }} />
    </div>



  </Card>;
}

export default Loginform
