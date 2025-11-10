import type { EXTENSION_FILTERS } from "@/constants"

export interface Extension {
    logo: string
    name: string
    description: string
    isActive: boolean
}

export type ExtensionFilterOptions = typeof EXTENSION_FILTERS[number]