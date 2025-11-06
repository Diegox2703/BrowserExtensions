import type { ExtensionFilterProps } from '@/types'

export function ExtensionFilter({ text }: ExtensionFilterProps) {
  return (
    <button className="dark:bg-Neutral-700 dark:text-Neutral-100 dark:hover:bg-Neutral-600 bg-Neutral-0 text-Neutral-900 hover:bg-Neutral-200 text-center px-3.5 py-1.5 rounded-3xl cursor-pointer transition-colors">
      { text }
    </button>
  )
}