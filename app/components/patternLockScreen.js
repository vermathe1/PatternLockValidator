import React from 'react';
import MakeButtons from './makebuttons';

const PatternScreen = (props)=>{
	return(
			<div>
				<MakeButtons rows = {props.rows} column={props.column} width={props.width} height={props.height} margin={props.margin} screen={props.screen}/>
			</div>
	);
}
export default PatternScreen;