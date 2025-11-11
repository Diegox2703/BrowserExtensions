import { EXTENSION_FILTERS } from "@/constants";
import { ExtensionFilter } from "../ExtensionFilter";
import { extensionHeaderStyles } from "./extensionHeader.styles";

export function ExtensionHeader() {
  return (
    <section className={extensionHeaderStyles.container}>
      <h1 className={extensionHeaderStyles.title}>Extensions List</h1>
      <div className={extensionHeaderStyles.filtersWrapper}>
        {
          EXTENSION_FILTERS.map(filter => (
            <ExtensionFilter 
              key={ filter } 
              label={ filter }
            />
          ))
        }
      </div>
    </section>
  )
}