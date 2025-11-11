import { useExtension } from "@/context/ExtensionContext";
import type { ExtensionFilterProps } from "./extension-filter.types";
import { extensionFilterStyles } from "./extension-filter.styles";

export function ExtensionFilter({ label }: ExtensionFilterProps) {
  const { setFilter, filter } = useExtension()
  const isActive = filter === label

  return (
    <button 
      className={extensionFilterStyles({ isActive })}
      onClick={() => setFilter(label)}
    >
      { label }
    </button>
  )
}