import React,{ Component } from 'react';


class ListPreview extends Component {
	handleClick = () => {
      this.props.onClick(this.props.id);
	};
	render(){
		return (
              
                <div className="link ListPreview" onClick={this.handleClick}>
        			<div className="movie-list">
           				{this.props.title}
        			</div>
     			</div>
             
			);
	}
}

ListPreview.propTypes = {
   id: React.PropTypes.number.isRequired,	
   title: React.PropTypes.string.isRequired,
   onClick: React.PropTypes.func.isRequired,
};

export default ListPreview;