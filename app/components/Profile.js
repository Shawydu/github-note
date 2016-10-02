import React from 'react';
var Router = require('react-router');
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import ReactFireMixin from 'reactfire';
import ReactMixin from 'react-mixin';
import Firebase from 'firebase';

// var config = {
//   apiKey: "AIzaSyCHuU2VBn8VSolUujsf9A_kk3cbUjQeR1Q",
//   authDomain: "github-note-tracker-c9bdb.firebaseapp.com",
//   databaseURL: "https://github-note-tracker-c9bdb.firebaseio.com/"
//   // storageBucket: "kuroski-note-taker.appspot.com"
// };
// Firebase.initializeApp(config);

class Profile extends React.Component {
  mixins: [ReactFireMixin]
  constructor() {
  	super();
  	this.state = {
  		notes: [1, 2, 3],
  		bio: { name: 'Shawy du' },
  		repos: ['a', 'b', 'c']
  	};	
  }
  componentDidMount(){
  	this.ref = new Firebase('https://github-note-tracker-c9bdb.firebaseio.com/');
  	var childRef = this.ref.child(this.props.params.username);
  	this.bindAsArray(childRef, 'notes');
  }
  componentWillUnMount(){
  	this.unbind('notes');
  }
  render(){
    return (
    	<div className="row">
    		<div className="col-md-4">
    			<UserProfile username={this.props.params.username} bio={this.state.bio} />
    		</div>
    		<div className="col-md-4">
    			<Repos username={this.props.params.username} repos={this.state.repos} />
    		</div>
    		<div className="col-md-4">
    			<Notes username={this.props.params.username} notes={this.state.notes} />
    		</div>
    	</div>
	);
  }
}

ReactMixin(Profile.prototype, ReactFireMixin);

module.exports = Profile;