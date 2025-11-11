import type { ExtensionFilterOptions } from "@/types"

export const EXTENSION_ACTIONS = {
    SET_FILTER: 'SET_FILTER',
    REMOVE_EXTENSION: 'REMOVE_EXTENSION',
    CHECK_EXTENSION: 'CHECK_EXTENSION'
} as const

export const extensionActionCreators = {
    setFilter: (selectedFilter: ExtensionFilterOptions) => ({
        type: EXTENSION_ACTIONS.SET_FILTER,
        payload: { selectedFilter }
    }),
    removeExtension: (extension: string) => ({
        type: EXTENSION_ACTIONS.REMOVE_EXTENSION,
        payload: { extension }
    }),
    checkExtension: (extension: string) => ({
        type: EXTENSION_ACTIONS.CHECK_EXTENSION,
        payload: { extension }
    })
} as const