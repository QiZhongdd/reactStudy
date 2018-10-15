import React, { Component } from "react";
import { connect } from "react-redux";
import {getAction,handleSubmitAction} from './store/actionCreators'
const TodoList=props=> {
    return (
      <div>
            <input type="text" value={props.value} onChange={props.changeInputValue.bind(this)} />
        <button onClick={props.handleSubmit.bind(this)}>提交</button>
        <ul>
         {
             props.list.map((item,index)=>{
                        return <li key={index} onClick={props.deleteItem(index)}>{item}</li>  
             })
         }
        </ul>
      </div>
    );
}
const mapStoreProps = state => {
  return {
    inputValue: state.inputValue,
    list:state.list
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeInputValue(e) {
      let value = e.target.value;
     const action = getAction(value);
      dispatch(action)
    },
    handleSubmit(){
        const action=handleSubmitAction();
        dispatch(action)
    },
    deleteItem(index){
        console.log(index);
    }
  };
};
export default connect(
  mapStoreProps,
  mapDispatchToProps
)(TodoList);
