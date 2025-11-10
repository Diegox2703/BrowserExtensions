import { EXTENSIONS } from "@/constants";
import type { ExtensionAction, ExtensionState } from "./extension-reducer.types";
import { EXTENSION_ACTIONS } from "./extensionActions";

export const initialState: ExtensionState = {
    extensions: EXTENSIONS,
    filter: "All"
}

export const extensionReducer = (state: ExtensionState, action: ExtensionAction) => {
    switch(action.type) {
        case EXTENSION_ACTIONS.SET_FILTER:
            return {...state, filter: action.payload.selectedFilter}
    }
}