import React from 'react';
import {connect} from 'react-redux';

class result extends React.Component{
	constructor(props){
		super(props);
		this.check = this.validate();
	}
	 validate(){
		const inputArray = this.props.inputArray;
		const validateArray = this.props.validateArray;
		if(inputArray.length != validateArray.length){
			return {msg:'Pattern didnot match!!'};
		}
		if(!validateArray.length){
			return {msg:"Please Enter a Pattern"}
		}
		for(var i=0;i<validateArray.length;i++){
			if(validateArray[i]!=inputArray[i]){
				return {msg:"Pattern didnot match!!"}
			}
		}
		return{msg:"Pattern matched"}
	}

	componentDidMount(){
		alert(this.check.msg);
		window.location.href="/";
	}
	
	render(){
		let msg = this.check.msg;
		return(
			<div className = "modal-error alert alert-danger">
				{msg}
			</div>
		);
	}
}


const mapStateToProps = (state)=>{
	const validateArray = state.ValidateLock.pattern;
	const inputArray = state.InputLock.pattern;
	return{validateArray,inputArray};
}
export default connect(mapStateToProps)(result);