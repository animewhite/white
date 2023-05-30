import { Formi } from "./form";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  forms: Formi[];
};

export enum SomeActions {
  "SAVEFORM" = "SAVEFORM",
  "GETFORM" = "GETFORM",
}

export interface SaveForm {
  action: SomeActions.SAVEFORM;
  payload: Formi;
}

export interface GetForm {
  action: SomeActions.GETFORM;
  payload: Formi[];
}

export type Actions = SaveForm | GetForm;
