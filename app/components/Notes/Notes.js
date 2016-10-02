import React from 'react';

class Notes extends React.Component {
  render(){
  	console.log('Notes: ', this.props.notes);
    return (
    	<div> 
    		<p> NOTES </p>

    	</div>
    );
  }
}

module.exports = Notes;