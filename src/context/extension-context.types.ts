import type { Extension, ExtensionFilterOptions } from "@/types"

export interface ExtensionProviderProps {
    children: React.ReactNode
}

export interface ExtensionContext {
    filter: ExtensionFilterOptions
    setFilter: (selectedFilter: ExtensionFilterOptions) => void
    filteredExtensions: () => Extension[]
}