import React from 'react'

const ShimmerUi = () => {
  return (
    <div className='dummy '>
      {Array(10).fill("").map((e, index) => (
        <div key={index} className='shimmer-card'></div>
      ))}
    </div>
  )
}

export default ShimmerUi