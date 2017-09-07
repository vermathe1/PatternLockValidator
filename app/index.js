import React from 'react';
import configureStore from './configureStore';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import IndexContainer from './containers/index';
import "./css/index.css";
require("patternlock/patternLock.css");
require("jquery/src/jquery.js");

const store = configureStore();

render(
	<Provider store = {store} >
		<IndexContainer/>
	</Provider>
	,document.getElementById('app')
);
