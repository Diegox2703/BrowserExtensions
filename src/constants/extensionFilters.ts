import type { ExtensionFilterProps } from "@/types";

export const EXTENSION_FILTERS: ExtensionFilterProps[] = [
    {
        text: 'All',
    },
    {
        text: 'Active'
    },
    {
        text: 'Inactive'
    }
] as const