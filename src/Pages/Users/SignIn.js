import React from 'react'
import './Users.css'
import axios from 'axios'
import {Link} from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

function SignIn() {
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    // console.log(serverUrl);
    
    //access global state

    const {setUser, setToken} = React.useContext(UserContext)

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSignin = (e)=>{
        e.preventDefault();
        // make api call to login
        axios.post(`${serverUrl}/users/login`, {email, password})
        .then(res => {
            console.log(res.data)
            //store user and token info
            setUser(res.data)
            setToken(res.data.token)
            //save in local storage
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('userInfo', JSON.stringify(res.data))
        })
        .catch(err => console.log(err))
    }

  return (
    
      <div className='sign-container'>
        <form className="signup-form" onSubmit={handleSignin}>
                    <div className="title-container">
                        <h1>Sign In</h1>
                        <p>Please fill in this form to login.</p>
                    </div>

                    <div className="input-wrapper">
                        <label 
                        htmlFor='email'>Email</label>
                        <input value={email}
                        onChange={(e)=>setEmail(e.target.value)}id='email' type="email" placeholder="Enter email" required />
                    </div>

                    <div className="input-wrapper">
                        <label htmlFor='pwd'>Password</label>
                        <input value={password} onChange={(e)=>setPassword(e.target.value)}id='pwd'type="password" placeholder="Enter password" required />
                    </div>

                  

                    <div className="button-container">
                        <button type="reset" className="cancel-btn">Cancel</button>
                        <button type="submit" className="sign-btn">Login</button>
                    </div> 
                        
                    <p className="sign-message">Don't have an account? &nbsp;
                    <Link to = '/signup' className="red-text">Sign Up</Link> </p>     
                           
        </form>
    </div>
  )
}

export default SignIn
