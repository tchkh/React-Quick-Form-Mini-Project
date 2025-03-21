import React from "react"

const MovieCheckbox = ({ movie, checked, onChange }) => {
  return (
    <div className='flex items-center mb-2'>
      <input
        type='radio'
        checked={checked}
        onChange={onChange}
        className='mr-2'
      />
      <span className='text-gray-700'>
        {movie.title} - Director: {movie.director}
      </span>
    </div>
  )
}

export default MovieCheckbox
