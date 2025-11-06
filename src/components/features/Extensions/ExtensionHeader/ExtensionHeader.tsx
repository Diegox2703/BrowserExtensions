import { EXTENSION_FILTERS } from "@/constants";
import { ExtensionFilter } from "../ExtensionFilter";

export function ExtensionHeader() {
  return (
    <section className="flex items-center justify-between">
      <h1 className="dark:text-white text-Neutral-900 text-3xl font-semibold">Extensions List</h1>
      <div className="flex gap-2">
        {
          EXTENSION_FILTERS.map(filter => (
            <ExtensionFilter key={ filter.text } text={ filter.text }/>
          ))
        }
      </div>
    </section>
  )
}