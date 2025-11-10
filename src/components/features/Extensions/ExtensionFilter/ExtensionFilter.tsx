import { useExtension } from "@/context/ExtensionContext";
import type { ExtensionFilterProps } from "./extension-filter.types";

export function ExtensionFilter({ label }: ExtensionFilterProps) {
  const { setFilter, filter } = useExtension()
  const isActive = filter === label

  return (
    <button 
      className={`dark:bg-Neutral-700 dark:text-Neutral-100 dark:hover:bg-Neutral-600 bg-Neutral-0 text-Neutral-900 hover:bg-Neutral-200 text-center px-3.5 py-1.5 rounded-3xl cursor-pointer transition-colors`}
      onClick={() => setFilter(label)}
    >
      { label }
    </button>
  )
}