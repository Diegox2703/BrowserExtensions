import type { ExtensionFilterOptions } from "@/types"

export const EXTENSION_ACTIONS = {
    SET_FILTER: 'SET_FILTER',
} as const

export const extensionActionCreators = {
    setFilter: (selectedFilter: ExtensionFilterOptions) => ({
        type: EXTENSION_ACTIONS.SET_FILTER,
        payload: { selectedFilter }
    })
} as const