import { EXTENSIONS } from '@/constants'
import { ExtensionHeader } from '../ExtensionHeader'
import { ExtensionItem } from '../ExtensionItem'

export function ExtensionList() {
  return (
    <section className='flex flex-col gap-5'>
      <ExtensionHeader/>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3'>
        {
          EXTENSIONS.map(extension => (
            <ExtensionItem key={ extension.name } {...extension}/>
          ))
        }
      </div>
    </section>
  )
}