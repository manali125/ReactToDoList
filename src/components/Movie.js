import React,{ Component, PropTypes} from 'react';

class Movie extends Component {
	render(){
		return (
               <div className="Movie">
                 {this.props.plot}
               </div>
			);
	}
}

Movie.propTypes = {
	plot: PropTypes.string.isRequired
}
export default Movie;