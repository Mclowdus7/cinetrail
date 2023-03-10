import React from 'react'
import './Rating.css'
import StarRatings from 'react-star-ratings'

function Rating({stars}) {
  return (
    <div>
        <StarRatings
          rating={stars}
          starRatedColor="red"
          numberOfStars={5}
          starDimension="15px"
          starSpacing='1'
        />
    </div>
  )
}

export default Rating
