import { FC } from 'react'

import RatingInput from '../../components/ratingInput/ratingInput.tsx'

export const HomePage: FC = () => {
  const handleRatingChange = (newRating) => {
    console.log('New rating:', newRating)
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100vh-82px)]">
      <RatingInput defaultValue={1} onChange={handleRatingChange} />
    </div>
  )
}
