import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';

var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;

module.exports = (
	<Route path="/" component={Main}>
	<Route path="profile/:username" component={Profile}></Route>
		<IndexRoute component={Home} />
	</Route>
);