import React from 'react';
import {connect} from 'react-redux';
import PatternLockScreen from '../components/patternLockScreen';
import ValidateButton from '../components/validateButton';
import ShowResult from '../components/result';

const MainContainer=(props)=>{
	return(
		<div className= "container">
			<div className="inputScreen">
				<div className="screen-container">
					{(window.location.pathname==='/') && <PatternLockScreen rows={3} column={3} width={"25%"} height={"15%"} margin={'4%'} screen="input"/>}
				</div>
				{(window.location.pathname==='/') && !!props.inputArray.length && <ValidateButton url='/validate' text={'ShowValidateScreen'}/>}
			</div>
			<div className="validationScreen">
				<div className="screen-container">
					{!!(window.location.pathname==='/validate' ||window.location.pathname==='/result' ) && <PatternLockScreen rows={3} column={3} width={"25%"} height={"15%"} margin={'4%'} screen="validate"/>}
				</div>
				{!!(window.location.pathname==='/validate' ||window.location.pathname==='/result') && <ValidateButton url='/result' text={"Result"}/>}
				{!!(window.location.pathname==='/result')&& props.validatepattern.length && <ShowResult/>}
			</div>
		</div>
	);
}
const mapStateToProps=(state)=>{
	const inputArray= state.InputLock.pattern;
	const validatepattern = state.ValidateLock.pattern;
	return{inputArray,validatepattern};
}
export default connect(mapStateToProps)(MainContainer);