import { ExtensionHeader } from '../ExtensionHeader'
import { ExtensionItem } from '../ExtensionItem'
import { useExtension } from '@/context'

export function ExtensionList() {
  const { filteredExtensions } = useExtension()
  const extensions = filteredExtensions()

  return (
    <section className='flex flex-col gap-5'>
      <ExtensionHeader/>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3'>
        {
          extensions.map(extension => (
            <ExtensionItem key={ extension.name } {...extension}/>
          ))
        }
      </div>
    </section>
  )
}