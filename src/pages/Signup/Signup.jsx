import { useState } from 'react'
import SignupForm from './SignupForm'
import VerificationForm from './VerificationForm'

import './forms.css'
function Signup({ setLoggedIn }) {

  const [email, setEmail] = useState('');

  const [showVerification, setShowVerification] = useState(false)
  return (
    <div className="signup">
      {showVerification ? 
      (<VerificationForm 
        email={email}
        setLoggedIn={setLoggedIn}
      />) : 
      (<SignupForm 
        setShowVerification={setShowVerification}
        email={email}
        setEmail={setEmail}
      />)}
    </div>
  )
}

export default Signup
