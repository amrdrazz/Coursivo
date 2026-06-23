import { useState } from "react"
import { useNavigate } from "react-router-dom";


function VerificationForm({ email }) {

  const navigate = useNavigate();

  const [code, setCode] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const [codeError, setCodeError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsDisabled(true)

    console.log(email, code)

    try{
      const res = await fetch('http://localhost:3000/verify', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({
          email,
          code
        }),
        headers: {'Content-Type': 'application/json'}
      });
  
      const data = await res.json();

      if (data.errors){
        setIsDisabled(false);
        setCodeError(data.errors.code);
      }
  
      if (data.user){
        navigate('/');
      }
    }catch(err){
      console.log(err)
    }

  }
  
  return (
    <form className="auth_form">
      <h1>Verification</h1>
      <p>We have sent a verification code in your email</p>

      <input type="text" placeholder="inter your verification code" onChange={(e) => {setCode(e.target.value)}} />
      <span className="codeError">{codeError}</span>
      
      <button disabled={isDisabled} onClick={handleSubmit} >Verify</button>
    </form>
  )
}

export default VerificationForm
