import React from 'react'
import Course from '../../../../components/Course'

function Wishlist() {
  return (
    <div className='wish_list'>
      <h1>Your Wishlist</h1>
      {[...Array(10)].map((_, index) => (
        <Course />
      ))}
    </div>
  )
}

export default Wishlist
