import { EDIT, FORM_SUBMIT } from "../constant/action";
import { ActionType, InputFieldPropTypes } from "../constant/interfaces";

const initialState: InputFieldPropTypes[] = JSON.parse(localStorage.getItem("formData") || "[]");

export const reducer = (state: InputFieldPropTypes[] = initialState, action: ActionType): InputFieldPropTypes[] => {
  switch (action.type) {
    case FORM_SUBMIT: {
      const storedData = [...state, action.payload];
      localStorage.setItem("formData", JSON.stringify(storedData));
      return storedData;
    }

    case EDIT: {
      console.log(action.payload.id);
      const editData = state.map((data: InputFieldPropTypes) => {
        return data.id === action.payload.id ? action.payload : data;
      });
      localStorage.setItem("formData", JSON.stringify(editData));
      return editData;
    }

    default:
      return state;
  }
};
