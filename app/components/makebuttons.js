import React from 'react';
import {connect} from 'react-redux';

class MakeButtons extends React.Component{
	constructor(props){
		super(props);
		this.htmlsArray = [];
		this.number = 1;
		this.CreateHtmls = this.CreateHtmls.bind(this)
		this.CreateHtmls();
	}

	drawbutton(props){
		const valueToset = this.number++;
		return(
			<button onClick = {e=>this.handleInputCick(e)} style = {{width:props.width, height:props.height, margin:props.margin}} className = 'inline-block lock-buttons' type = 'button' value = {valueToset}>&middot;</button>
		);
	}

	breakline(){
		return(
			<br></br>
		);
	}

	handleInputCick(e){
		e.preventDefault();
		switch(this.props.screen){
			case'validate':{
				return this.props.dispatch({type:'VALIDATE_PATTERN',pattern:e.target.value})
			}
			case'input':{
				return this.props.dispatch({type:'INPUT_PATTERN',pattern:e.target.value})
			}
			default:{
				console.log("action type not given")
			}
		}
	}

	CreateHtmls(){
		for(var rows = 0; rows<this.props.rows; rows++){
			for (var column = 0;column<=this.props.column; column++){
				if(column == (this.props.column)){
					this.htmlsArray.push(this.breakline());
				}else{
					this.htmlsArray.push(this.drawbutton(this.props));
				}
			}
		}
		this.number = 1;
	}

	render(){
		return (
			<div style = {{backgroundColor:'#750c0c'}}>{this.htmlsArray}</div>
		);
	}
}

export default connect()(MakeButtons);
