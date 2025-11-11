import { createContext, useContext, useReducer } from "react";
import type { ExtensionContext, ExtensionProviderProps } from "./extension-context.types";
import { extensionActionCreators, extensionReducer, initialState } from "@/store";
import type { ExtensionFilterOptions } from "@/types";

const ExtensionContext = createContext<ExtensionContext | undefined>(undefined)

export const ExtensionProvider = ({ children }: ExtensionProviderProps) => {
    const [state, dispatch] = useReducer(extensionReducer, initialState)
    const { filter } = state

    console.log(state.extensions)

    const setFilter = (selectedFilter: ExtensionFilterOptions) => (
        dispatch(extensionActionCreators.setFilter(selectedFilter))
    )

    const removeExtension = (extension: string) => (
        dispatch(extensionActionCreators.removeExtension(extension))
    )

    const checkExtension = (extension: string) => (
        dispatch(extensionActionCreators.checkExtension(extension))
    )

    const filteredExtensions = () => {
        if (state.filter === 'Active') return state.extensions.filter(extension => extension.isActive)
        if (state.filter === 'Inactive') return state.extensions.filter(extension => !extension.isActive)
        return state.extensions
    }

    return (
        <ExtensionContext.Provider value={{ 
            filteredExtensions, 
            setFilter, 
            removeExtension,
            checkExtension, 
            filter
        }}>
            { children }
        </ExtensionContext.Provider>
    )
}

export const useExtension = () => {
    const context = useContext(ExtensionContext)

    if (!context) throw new Error('useExtension must be used inside of an AuthProvider')

    return context
}