
//state
const iState = {
   isChecked: false,
}

//state managed & changed

//reducer with two argument i) state ii) action (which change the state)
const reducer =(state=iState,action)=>{
    if(action.type==='CHANGE_NAME'){
        return{
            ...state,
            isChecked:action.payload
        }
    }
    return state;
}

export default reducer