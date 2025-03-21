import React from "react"
import MovieCheckbox from "./MovieCheckbox"

const movies = [
  { title: "Avatar (2009)", director: "James Cameron" },
  { title: "Inception (2010)", director: "Christopher Nolan" },
  { title: "Interstellar (2014)", director: "Christopher Nolan" },
  { title: "The Shawshank Redemption (1994)", director: "Frank Darabont" },
  { title: "Pulp Fiction (1994)", director: "Quentin Tarantino" },
  { title: "Parasite (2019)", director: "Bong Joon-ho" },
]

const MovieSelection = ({ selectedMovie, setSelectedMovie }) => {
  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie)
  }

  return (
    <div className='mb-4'>
      <label className='block text-gray-700 text-sm font-bold mb-2'>
        เลือกหนังที่คุณชอบ *
      </label>
      {movies.map((movie) => (
        <MovieCheckbox
          key={movie.title}
          movie={movie}
          checked={selectedMovie === movie.title}
          onChange={() => handleMovieSelect(movie.title)}
        />
      ))}
    </div>
  )
}

export default MovieSelection
