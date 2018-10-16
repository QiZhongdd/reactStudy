import { CHANGE_INPUT_VALUE, HANDLE_SUBMIT_ACTION, DELETE_ITEM } from "./actionType";
const defauleState={
    inputValue:'',
    list:[]
}
export default (state=defauleState,action)=>{
    if (action.type === CHANGE_INPUT_VALUE) {
      const newState = JSON.parse(JSON.stringify(state));
      newState.inputValue = action.value;
      return newState;
    }
    if (action.type === HANDLE_SUBMIT_ACTION){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.push(state.inputValue);
        newState.inputValue = '';
        return newState
    }
    if (action.type === DELETE_ITEM){
        const newState=JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }
    return state
}