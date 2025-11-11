import type { Extension, ExtensionFilterOptions } from "@/types";
import type { EXTENSION_ACTIONS } from "./extensionActions";

export interface ExtensionState {
    extensions: Extension[]
    filter: ExtensionFilterOptions
}

export type ExtensionAction = 
 | { type: typeof EXTENSION_ACTIONS.SET_FILTER, payload: { selectedFilter: ExtensionFilterOptions } }
 | { type: typeof EXTENSION_ACTIONS.REMOVE_EXTENSION, payload: { extension: string } }
 | { type: typeof EXTENSION_ACTIONS.CHECK_EXTENSION, payload: { extension: string } }