import React from 'react';
import ListPreview from './ListPreview';

const MovieList = ({ movie, onMovieClick }) => (
  <div className="MovieList">
     
	            {Object.keys(movie).map(movieId =>
                   <ListPreview 
                    key = {movieId} 
                    onClick = {onMovieClick} 
                    {...movie[movieId]}/>

	            )}
	
  </div>
)

MovieList.propTypes = {
   movie: React.PropTypes.object,
   onMovieClick: React.PropTypes.func.isRequired,	
};

export default MovieList;
