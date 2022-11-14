import React from 'react'
import { HeroList } from '../components'

export const Dc = () => {
  return (
    <div className='m-4'>
      <h1>Dc Comics</h1>
      <hr />

      <HeroList publisher="DC Comics" />
    </div>
  )
}