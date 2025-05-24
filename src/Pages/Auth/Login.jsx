import './Auth.css'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const submitHandle = () => {
    navigate('/')
  }

  return (
    <div className='auth'>
      <div className='auth-container'>
        <h3>login</h3>
        <form action="#" onSubmit={submitHandle}>
          <input type='email' placeholder='your email...' required />
          <input type='password' placeholder='your password...' required />
          <button type='submit'>login</button>
        </form>
        <p>don't have an account <Link to='/auth/register'>Register</Link></p>
      </div>
    </div>
  )
}

export default Login
