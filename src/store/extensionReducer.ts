import { EXTENSIONS } from "@/constants";
import type { ExtensionAction, ExtensionState } from "./extension-reducer.types";
import { EXTENSION_ACTIONS } from "./extensionActions";

export const initialState: ExtensionState = {
    extensions: EXTENSIONS,
    filter: "All"
}

export const extensionReducer = (state: ExtensionState, action: ExtensionAction) => {
    const payload = action.payload

    switch(action.type) {
        case EXTENSION_ACTIONS.SET_FILTER:
            return {...state, filter: payload.selectedFilter}
        case EXTENSION_ACTIONS.REMOVE_EXTENSION:
            return {
                ...state, 
                extensions: state.extensions.filter(extension => extension.name !== payload.extension)}
        case EXTENSION_ACTIONS.CHECK_EXTENSION:
            return {
                ...state,
                extension: state.extensions.map(extension =>
                    extension.name === payload.extension 
                        ? extension.isActive = !extension.isActive
                        : extension
                )
            }
    }
}