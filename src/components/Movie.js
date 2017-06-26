import React,{ Component, PropTypes} from 'react';

class Movie extends Component {
	render(){
		return (
               <div className="Movie">
                 <div className="panel panel-primary">
                 	
                      
                 	
                   <div class="panel-body">
                   <img className="img-responsive" alt="poster" src={this.props.poster}/>
                      <p><strong>Plot:</strong>
                      {this.props.plot}</p>
                      <p><strong>Director:</strong>
                      {this.props.director}</p>
                      <p><strong>Writers:</strong>
                      {this.props.writer}</p>
                      <p><strong>Actors:</strong>
                      {this.props.actors}</p>
                   </div>
                 </div>
               </div>
			);
	}
}

Movie.propTypes = {
	plot: PropTypes.string.isRequired
}
export default Movie;