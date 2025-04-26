import React from 'react'
import { roomsDummyData } from '../assets/assets'

const FeaturedDestination = () => {
  return (
    <div>
        <div>
            {roomsDummyData.slice(0,4).map(() =>())}
        </div>
    </div>
  )
}

export default FeaturedDestination