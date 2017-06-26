import React from 'react';
import axios from 'axios';
import Header from './Header';
import MovieList from './MovieList';
import Movie from './Movie';
import * as api from '../api';

const pushState = (obj,url) =>
  window.history.pushState(obj,'',url);

class App extends React.Component {
	state = {
		pageHeader: 'To Do App',
		movie: {}
	};   
	componentDidMount() {
       axios.get('/api/movie')
         .then(resp => {
         	this.setState({
				movie: resp.data.movie
			});
         })
         .catch(console.error)


		
	}
	componentWillUnmount() {
		
	}

	fetchMovie = (movieId) => {
       pushState(
         { currentMovieId: movieId},
         `/movie/${movieId}`
      );


      //lookup the movie
      api.fetchMovie(movieId).then(movie => {
      	 this.setState({
         pageHeader:this.state.movie[movieId].title,
         currentMovieId: movieId
        }); 
      })
      
	};
    
    currentContent(){
    	if(this.state.currentMovieId){
    		return <Movie {...this.state.movie[this.state.currentMovieId]}/>;
    	}
    	return <MovieList 
                 onMovieClick={this.fetchMovie}
	             movie = {this.state.movie}/>;
    }

	render() {
		return (
	        <div className="App">
	            <Header message={this.state.pageHeader}/>
	            {this.currentContent()}
	            
			</div>  
			);
	}
}
0
export default App;