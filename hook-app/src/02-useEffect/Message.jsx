import React, { useEffect } from 'react'

const Message = () => {

    useEffect(() => {

        const onMouseMove = ({x, y}) => {
            const coords = {x, y}
            console.log(coords);
        }

        window.addEventListener("mousemove", onMouseMove)

        return () => {
            window.removeEventListener("mousemove", onMouseMove)
        }
    }, [])
  return (
    <>
        <h3>User already exists</h3>
    </>
  )
}

export default Message