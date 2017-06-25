import React from 'react';
import axios from 'axios';
import Header from './Header';
import MovieList from './MovieList';


class App extends React.Component {
	state = {
		pageHeader: 'To Do App',
		movie: []
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
	render() {
		return (
	        <div className="App">
	            <Header message={this.state.pageHeader}/>
	            <MovieList movie = {this.state.movie}/>
			</div>  
			);
	}
}
0
export default App;