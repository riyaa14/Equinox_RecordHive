import React, { useState } from 'react';
import "./Loginform.css";
import Card from "../Card/Card";
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';


const Loginform = () => {
  const navigate = useNavigate();
  const [enrollNo, setEnroll] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);


  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:3007/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //"Access-Control-Allow-Origin": "*", // Required for CORS support to work
        },
        body: JSON.stringify({
          enrollNo,
          password,
        }),
        credentials: "include",
        mode: "cors",
      });
      const data = await res.json();
      if (data.success === true) {
        toast.success("Login Successful");
        setError(null);
        
        if(data.user.role==="Admin"){
          navigate("/StudentRecords");
        } else {
          navigate("/StudentProfile");
        }
      }
      if (data.success !== true) {
        setError(data.message);
        toast.error(data.message);
      }
    } catch (error) {
      setError("An unexpected error occurred");
      toast.error("Login Failed-An unexpected error occurred");
    }
  };


  return <Card>
    <h1 className='title'>Sign In</h1>
    <div className="divider"></div>
    <p className='subtitle'>Please login using your Email and password</p>
    <form onSubmit={loginHandler}>
        <div className='input_Container'>
            <input type="text" placeholder='Enrollment no' required value={enrollNo} onChange={(e) => setEnroll(e.target.value)}/>
            <input type="password" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type='submit' value="Log In" className='login_button'>Log In</button>
    </form>
    <div className='link_container'>
        <a href="/forgot/password" className='small'>
           Forgot password?
        </a>
    </div>
    <div className="divider"></div>
    {error && <p>{error}</p>}
    <div className='icons'><FaGoogle style={{ color: 'white', fontSize: '24px' }} />
    <FaGithub style={{ color: 'white', fontSize: '24px' }} />
    <FaTwitter style={{ color: 'white', fontSize: '24px' }} />
    </div>



  </Card>;
}

export default Loginform
