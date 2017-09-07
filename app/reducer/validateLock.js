const ValidateLock = (state={pattern:[]},action)=>{
	switch(action.type){
		case "VALIDATE_PATTERN":{
			return Object.assign({},state,{
				'pattern':[...state.pattern,action.pattern]
			});
		}
		case "CLEAR_INPUT":{
			return Object.assign({},state,{
				'pattern':action.pattern
			});
		}
		default:
			return state;
	}
}
export default ValidateLock;