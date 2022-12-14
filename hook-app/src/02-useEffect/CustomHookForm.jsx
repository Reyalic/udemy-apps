import React, { useEffect } from 'react'
import { useForm } from "../hooks/useForm"

const CustomHookForm = () => {

    const {formState, onInputChange, onResetForm, username, email, password} = useForm({
        username: "",
        email: "", 
        password: ""
    })

  return (
    <>
        <h1>Form with Custom Hook</h1>
        <hr />

        <input 
            type="text" 
            className='form-control'
            placeholder='Username'
            name='username'
            value={username}
            onChange={onInputChange}
        />

        <input 
            type="email" 
            className='form-control mt-3'
            placeholder='something@random.com'
            name='email'
            value={email}
            onChange={onInputChange}
        />

        <input 
            type="password" 
            className='form-control mt-3'
            placeholder='Password'
            name='password'
            value={password}
            onChange={onInputChange}
        /> 

        <button onClick={onResetForm} className='btn btn-primary mt-3'>Reset</button>
    </>
  )
}

export default CustomHookForm