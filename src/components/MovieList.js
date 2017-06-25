import React from 'react';
import ListPreview from './ListPreview';

const MovieList = ({ movie, onMovieClick }) => (
  <div className="MovieList">
     
	            {movie.map(movie =>
                   <ListPreview 
                    key = {movie.id} 
                    onClick = {onMovieClick} 
                    {...movie}/>

	            )}
	
  </div>
)

MovieList.propTypes = {
   movie: React.PropTypes.array,
   onMovieClick: React.PropTypes.func.isRequired,	
};

export default MovieList;
