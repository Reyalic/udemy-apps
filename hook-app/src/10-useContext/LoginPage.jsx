import React, { useContext } from 'react'
import { UserContext } from './context/UserContext'

const LoginPage = () => {

  const { user, setUser } = useContext( UserContext )
  

  return (
    <>
      <div>LoginPage</div>
      <hr />

      <pre>
        { JSON.stringify( user, null, 3)}
      </pre>

      <button 
        className='btn btn-primary'
        onClick={ () => setUser({ id: 123, name: "Juan", email: "juan@google.com"})}
      >
        Set user
      </button>
    </>
  )
}

export default LoginPage