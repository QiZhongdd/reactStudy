import {
  CHANGE_INPUT_VALUE,
  HANDLE_SUBMIT_ACTION,
  DELETE_ITEM
} from "./actionType";
export const getAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value: value
});

export const handleSubmitAction = () => ({
  type: HANDLE_SUBMIT_ACTION
});
export const deleteItem = index => ({ type: DELETE_ITEM, index: index });
