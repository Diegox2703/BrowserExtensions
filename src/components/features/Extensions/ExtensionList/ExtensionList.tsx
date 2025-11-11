import { ExtensionHeader } from '../ExtensionHeader'
import { ExtensionItem } from '../ExtensionItem'
import { useExtension } from '@/context'
import { extensionListStyles } from './extensionList.styles'

export function ExtensionList() {
  const { filteredExtensions } = useExtension()
  const extensions = filteredExtensions()

  return (
    <section className={extensionListStyles.container}>
      <ExtensionHeader/>
      <div className={extensionListStyles.list}>
        {
          extensions.map(extension => (
            <ExtensionItem key={ extension.name } {...extension}/>
          ))
        }
      </div>
    </section>
  )
}