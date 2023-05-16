import { useState } from 'react'
import {Link } from 'react-router-dom'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const {email, password} = formData

  const onChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.id] : e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  const formLoginInputs = [
    { id:'email', type: 'email', text: 'email', value: email},
    { id:'password', type: 'password', text: 'password', value: password},
  ]
  return (
    <div>
      <div className="card">
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
          {formLoginInputs.map((input)=> (
            <div>
            <label htmlFor={input.id}>{input.text}</label>
            <input 
              type={input.type} 
              id={input.id}
              value={input.value}
              onChange={onChange}
              required
              />
            </div>
          ))}

          <button type="submit" className="btn btn--primary">login</button>

          <Link className='btn btn--link' to={'/register'}>no account? register</Link>
        </form>
      </div>
    </div>
  )
}

export default Login