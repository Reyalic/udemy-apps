import React from 'react'
import { HeroList } from '../components'

export const Marvel = () => {
  return (
    <div className='m-4'>
      <h1>Marvel Comics</h1>
      <hr />

      <HeroList publisher="Marvel Comics" />
    </div>
  )
}