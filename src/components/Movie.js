import React,{ Component, PropTypes} from 'react';

class Movie extends Component {
	render(){
		return (
               <div className="Movie">
                 {this.props.id}
               </div>
			);
	}
}

Movie.propTypes = {
	id: PropTypes.number.isRequired
}
export default Movie;