 const InputLock = (state={pattern:[]},action)=>{
	switch(action.type){
		case "INPUT_PATTERN":{
			return Object.assign({},state,{
				'pattern':[...state.pattern,action.pattern]
			});
		}
		default:
			return state;
	}
}
export default InputLock;