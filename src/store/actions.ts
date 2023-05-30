import { Formi } from "../types/form"
import { Actions, SomeActions } from "../types/store"
import firebase from "../utils/firebase";


export const savef = async (form : Formi): Promise<Actions> => {
    await firebase.saveform(form);

    return {
        action: SomeActions.SAVEFORM,
        payload: form,
    };
};

export const getf = async (): Promise<Actions> => {
    const form = await firebase.getform();

    return {
        action: SomeActions.GETFORM,
        payload: form,
    };
};