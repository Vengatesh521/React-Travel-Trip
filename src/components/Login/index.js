import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'

import {FaEye, FaEyeSlash} from 'react-icons/fa'
import Cookies from 'js-cookie'
import './index.css'

const Login = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [showSubmitError, setShowSubmitError] = useState(false)

  const history = useHistory()

  useEffect(() => {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      history.replace('/')
    }
  }, [history])

  // ✅ Handle successful login
  const onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/') // ✅ Redirect to home page
  }

  // ❌ Handle failed login
  const onSubmitFailure = error => {
    setErrorMsg(error)
    setShowSubmitError(true)
  }

  // 🔄 Submit form
  const submitForm = async e => {
    e.preventDefault()
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    try {
      const response = await fetch(url, options)
      const data = await response.json()
      console.log('okkk1')
      console.log(data)

      if (response.ok) {
        onSubmitSuccess(data.jwt_token)
        console.log('okkk')
      } else {
        onSubmitFailure(data.error_msg)
      }
    } catch (error) {
      onSubmitFailure('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <form className='login-form' onSubmit={submitForm}>
          <h2 className="login-title">Travel Trip</h2>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            className="login-input"
            value={username}
            onChange={e => setUserName(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              className="login-input"
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {showPassword ? (
              <FaEyeSlash
                className="eye-icon"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <FaEye
                className="eye-icon"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>

          <button className="login-button" type="submit">
            Login
          </button>

          {showSubmitError && <p className="error-message">{errorMsg}</p>}
        </form>
      </div>
    </div>
  )
}

export default Login
