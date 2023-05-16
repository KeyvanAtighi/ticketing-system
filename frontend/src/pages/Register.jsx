import { useState } from 'react'
import {Link } from 'react-router-dom'
import { toast } from 'react-toastify'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const {name, email, password, passwordConfirm} = formData

  const onChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.id] : e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if(password !== passwordConfirm) {
      toast.error('passwords do not match ')
    }
  }

  const formRegisterInputs = [
    { id:'name', type: 'text', text: 'name', value: name },
    { id:'email', type: 'email', text: 'email', value: email},
    { id:'password', type: 'password', text: 'password', value: password},
    { id:'passwordConfirm', type: 'password', text: 'confirm password', value: passwordConfirm}
  ]
  return (
    <div>
      <div className="card">
        <h1>Register</h1>
        <form onSubmit={onSubmit}>
          {formRegisterInputs.map((input)=> (
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

          <button type="submit" className="btn btn--primary">register</button>

          <Link className='btn btn--link' to={'/login'}>already register? Login</Link>



        </form>
      </div>
    </div>
  )
}

export default Register