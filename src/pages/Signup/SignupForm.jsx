
import { useState } from 'react';
import Signup from './Signup';

function SignupForm({setShowVerification, email, setEmail}) {

  const [isDisabled, setIsDisabled] = useState(false);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDisabled(true)

    const res = await fetch('http://localhost:3000/signup', {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        password
      }),
      headers: {'Content-Type': 'application/json'}
    });
    const data = await res.json();
    if (data.user){
      setShowVerification(true)
    }
    if (data.errors){
      setIsDisabled(false);
      setNameError(data.errors.name);
      setEmailError(data.errors.email);
      setPasswordError(data.errors.password);
    }
  }
  return (
    <form className="auth_form">
        <h1>Sign up</h1>

        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder='inter your name' onChange={(e) => {setName(e.target.value)}} />
        <span className='error'>{nameError}</span>

        <label htmlFor="email">Email</label>
        <input type="text" id="email" placeholder='inter your email' onChange={(e) => {setEmail(e.target.value)}} />
        <span className='error'>{emailError}</span>

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder='inter a password' onChange={(e) => {setPassword(e.target.value)}} />
        <span className='error'>{passwordError}</span>

        <button disabled={isDisabled} onClick={handleSubmit} >Sign up</button>
    </form>
  )
}

export default SignupForm
