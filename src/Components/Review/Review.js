import React from 'react'
import './Review.css'
import avatar from '../../Assets/noImage.png'

function Review({review}) {

    const imageBase = process.env.REACT_APP_IMAGE_BASE;

    //create state for image error

    const [imageError, setImageError] = React.useState(false)

    //create state for more/less text in review

    const [seeMore, setSeeMore] = React.useState(false)
  return (
    <div className='review'>
        <div className='avatar-container'>
                <img className='avatar' alt='avatar'
                onError = {()=>setImageError(true)}
                src={ imageError? avatar:
                `${imageBase}${review?.author_details.avatar_path}`}/>
                 <p>{review?.author}</p>
        </div>
        <div className='review-text'>
            {
                !seeMore ? 
            <p>{review?.content.slice(0, 250)}<span onClick={()=>setSeeMore(true)}>...see more</span></p>
            :
            <p>{review?.content}<span onClick={()=>setSeeMore(false)}>...see less</span></p>
            }
        </div>
    </div>
  )
}

export default Review
