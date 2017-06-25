import React,{ Component } from 'react';


class ListPreview extends Component {
	handleClick = () => {
      console.log(this.props.title);
	};
	render(){
		return (
              
                <div className="link ListPreview" onClick={this.handleClick}>
        			<div className="category-name">
           				{this.props.title}
        			</div>
     			</div>
             
			);
	}
}

ListPreview.propTypes = {
   title: React.PropTypes.string.isRequired
};

export default ListPreview;