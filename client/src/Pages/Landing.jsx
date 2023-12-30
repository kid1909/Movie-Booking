import { Navbar } from '../components'
import { useState } from 'react'
import Carousel from '../components/Carousel'
import ListMovies from '../components/ListMovies'

const Landing = () => {
  return (
    <>
      <Carousel />
      <ListMovies />
    </>
  )
}

export default Landing
