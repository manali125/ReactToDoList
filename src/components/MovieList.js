import React from 'react';
import ListPreview from './ListPreview';

const MovieList = ({ movie }) => (
  <div className="MovieList">
     
	            {movie.map(movie =>
                   <ListPreview key = {movie.id} {...movie}/>

	            )}
	
  </div>
)

MovieList.propTypes = {
   movie: React.PropTypes.array	
};

export default MovieList;
