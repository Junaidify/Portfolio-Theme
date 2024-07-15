export interface InputFieldPropTypes {
  id: number;
  name: string;
  description: string;
  location: string;
  bio: string;
}

export interface ActionType {
  type: string;
  payload: InputFieldPropTypes;
}
