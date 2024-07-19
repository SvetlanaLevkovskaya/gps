import React, { useState } from 'react'

interface RatingInputProps {
  defaultValue?: number
  onChange?: (rating: number) => void
}

const RatingInput: React.FC<RatingInputProps> = ({ defaultValue = 0, onChange }) => {
  const [rating, setRating] = useState(defaultValue)
  const [hoveredRating, setHoveredRating] = useState<number | null>(null)

  const handleMouseEnter = (value: number) => {
    setHoveredRating(value)
  }

  const handleMouseLeave = () => {
    setHoveredRating(null)
  }

  const handleClick = (value: number) => {
    setRating(value)
    if (onChange) {
      onChange(value)
    }
  }

  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="flex justify-center space-x-1">
      {stars.map((star) => (
        <svg
          key={star}
          className={`w-6 h-6 cursor-pointer ${rating >= star || hoveredRating >= star ? 'text-yellow-400' : 'text-gray-300'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(star)}
        >
          <path d="M12 2l2.39 4.85 5.35.78-3.87 3.77.91 5.3L12 13.3l-4.78 2.51.91-5.3-3.87-3.77 5.35-.78L12 2z" />
        </svg>
      ))}
      <span className="ml-2 text-sm text-gray-600 ">{rating}</span>
    </div>
  )
}

export default RatingInput
