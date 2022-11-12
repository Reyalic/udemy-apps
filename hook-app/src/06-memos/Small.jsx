import { memo } from 'react'

const Small = memo(({value}) => {

    console.log("showing message");
  return (
    <small>{value}</small>
  )
})

export default Small