import React from 'react';

const ListPreview = (movie) => (
     <div className="ListPreview">
        <div className="category-name">
           {movie.title}
        </div>
     </div>
	);
export default ListPreview;