import { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = ({numOfStars = 5}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) =>  {
    setRating(getCurrentIndex);
  }
  
  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  }
  
  const handleMouseLeave = () => {
    setHover(rating);
  }
  
 return (
   <div className='flex gap-1'>
    {
      [...Array(numOfStars)].map((_, index) => {
        index +=1

        return <FaStar
          key={index}
          className={index <= (hover || rating) ? 'text-yellow-400' : 'text-white'}
          onClick={() => handleClick(index)}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}/>
      })
    }
   </div>
 )
}

export default StarRating