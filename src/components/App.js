import React from 'react';
import Header from './Header';
import ListPreview from './ListPreview';
import data from '../data';

class App extends React.Component {
	state = {
		pageHeader: 'To Do App',
		movie: []
	};   
	componentDidMount() {
		this.setState({
			movie: data.movie
		});
	}
	componentWillUnmount() {
		
	}
	render() {
		return (
	        <div className="App">
	            <Header message={this.state.pageHeader}/>
	            <div>
	            {this.state.movie.map(movie =>
                   <ListPreview key = {movie.id} {...movie}/>

	            )}
                </div>
			</div>  
			);
	}
}
0
export default App;