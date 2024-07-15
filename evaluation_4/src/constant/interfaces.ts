export interface InputFieldPropTypes {
  slice: any;
  length: number;
  slice(page: number, arg1: number): unknown;
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
