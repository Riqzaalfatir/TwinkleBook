import React from 'react'
import Hero from './Hero'
import { kinfolk, timesNewRoman } from './fonts/fonts'

const index = () => {
  return (
    <div className={`${kinfolk.variable} ${timesNewRoman.variable}`}>
      <Hero />
    </div>
  )
}

export default index