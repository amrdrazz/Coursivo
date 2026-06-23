import { useState } from "react";
import { useNavigate } from "react-router-dom";

import '../Signup/forms.css'
function Login() {

    const navigate = useNavigate()

    const [isDisabled, setIsDisabled] = useState(false);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsDisabled(true)

        const res = await fetch('http://localhost:3000/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });
        const data = await res.json();
        if (data.user){
            navigate('/');
        }

        if (data.errors){
            setEmailError(data.errors.email);
            setPasswordError(data.errors.password);
        }
    }
  return (
    <div className="login">
          <form className="auth_form">
            <h1>Log in</h1>

            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder='inter your email' onChange={(e) => {setEmail(e.target.value)}} />
            <span className='error'>{emailError}</span>

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder='inter a password' onChange={(e) => {setPassword(e.target.value)}} />
            <span className='error'>{passwordError}</span>
            
            <button disabled={isDisabled} onClick={handleSubmit} >Log in</button>
        </form>
    </div>
  )
}

export default Login
