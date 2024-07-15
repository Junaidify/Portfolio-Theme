import { EDIT, FORM_SUBMIT } from "../constant/action";
import { ActionType, InputFieldPropTypes } from "../constant/interfaces";

// Define a valid initial state as a fallback
const defaultState: InputFieldPropTypes[] = [
  {
    id: 0,
    name: 'Masai School',
    description: 'Education of new Age',
    location: 'Bangalore, India',
    bio: 'Journey to change the aspirations into inspiration'
  }
];

// Parse the initial state from localStorage or use the default state
const initialState: InputFieldPropTypes[] = JSON.parse(localStorage.getItem("formData") || JSON.stringify(defaultState));

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
