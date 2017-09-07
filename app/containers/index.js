import React from 'react';
import {Router,Route,browserHistory} from 'react-router';
import {Switch} from 'react-router-dom';
import MainContainer from './maincontainer';

const IndexContainer = ()=>{
	return(
		<Router history={browserHistory}>
			<Switch>
				<Route exact path = "/" component = {MainContainer}></Route>
				<Route exact path = "/validate" component = {MainContainer}></Route>
				<Route exact path = "/result" component = {MainContainer}></Route>
			</Switch>
		</Router>
	);
}

export default IndexContainer;