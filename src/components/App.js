import React from 'react';
import Header from './Header';
import ListPreview from './ListPreview';

class App extends React.Component {
	state = {
		pageHeader: 'To Do App'
	};   
	componentDidMount() {
		
	}
	componentWillUnmount() {
		
	}
	render() {
		return (
	        <div className="App">
	            <Header message={this.state.pageHeader}/>
	            <div>
	            {this.props.movie.map(movie =>
                   <ListPreview {...movie}/>

	            )}
                </div>
			</div>  
			);
	}
}
0
export default App;