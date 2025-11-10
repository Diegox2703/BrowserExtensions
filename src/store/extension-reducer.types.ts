import type { Extension, ExtensionFilterOptions } from "@/types";
import type { EXTENSION_ACTIONS } from "./extensionActions";

export interface ExtensionState {
    extensions: Extension[]
    filter: ExtensionFilterOptions
}

export interface ExtensionAction {
    type: keyof typeof EXTENSION_ACTIONS
    payload: ExtensionPayload
}

interface ExtensionPayload {
    selectedFilter: ExtensionFilterOptions
}