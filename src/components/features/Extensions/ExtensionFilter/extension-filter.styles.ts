import { cva } from "class-variance-authority";

export const extensionFilterStyles = cva(
    'text-center px-3.5 py-1.5 rounded-3xl cursor-pointer transition-colors',
    {
        variants: {
            isActive: {
                true: 'dark:bg-Red-400 dark:text-Neutral-900 dark:hover:bg-Red-500 bg-Red-700 text-Neutral-100 hover:bg-Red-500',
                false: 'dark:bg-Neutral-700 dark:text-Neutral-100 dark:hover:bg-Neutral-600 bg-Neutral-0 text-Neutral-900 hover:bg-Neutral-200'
            }
        },
        defaultVariants: {
            isActive: false
        }
    }
)