import React, { useRef } from 'react'

const FocusScreen = () => {

    const inputRef = useRef()

    const onSubmit = () => {
        inputRef.current.select()
    }
  return (
    <>
        <h1>FocusScreen</h1>
        <hr />

        <input
            ref={inputRef}
            type="text"
            placeholder="Type your name"
            className="form-control"
        />

        <button onClick={onSubmit} className='btn btn-primary mt-2'>Set focus</button>
    </>
  )
}

export default FocusScreen