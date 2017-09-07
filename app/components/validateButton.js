import React from 'react';
import {Link} from 'react-router';

const ValidateButton = (props)=>{
	return(
		<div className = "button-container">
			<Link to = {props.url} className="validate-button">{props.text}</Link>
		</div> 
	);
}
export default ValidateButton;