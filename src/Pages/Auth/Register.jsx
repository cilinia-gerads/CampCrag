import './Auth.css'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate()

  const submitHandle = () => {
    navigate('/')
  }

  return (
    <div className='auth'>
      <div className='auth-container'>
        <h3>register</h3> 
        <form action="#" onSubmit={submitHandle}>
          <input type='text' placeholder='your name...' required />
          <input type='email' placeholder='your email...' required />
          <input type='password' placeholder='your password...' required />
          <button type='submit'>register</button>
        </form>
        <p>already have an account <Link to='/auth/login'>Login</Link></p>
      </div>
    </div>
  )
}

export default Register
