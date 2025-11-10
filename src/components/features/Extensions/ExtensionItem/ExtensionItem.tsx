import { Button, Switch } from '@/components/ui'
import type { ExtensionProps } from './extension-item.types'

export function ExtensionItem({ logo, name, description, isActive }: ExtensionProps) {
  return (
    <article className="dark:bg-Neutral-800 dark:border dark:border-Neutral-600 dark:shadow-none shadow-sm shadow-Neutral-300 bg-Neutral-0 aspect-4/2 rounded-2xl p-4 flex flex-col justify-between">
      <section className="flex gap-4 items-start">
        <div>
            <img className='max-w-none' src={ logo } alt="extension-image"/>
        </div>
        <div className='flex flex-col gap-3'>
            <h1 className='dark:text-Neutral-100 text-Neutral-900 font-bold text-lg leading-none'>{ name }</h1>
            <p className='dark:text-Neutral-300 text-Neutral-600 text-sm'>{ description }</p>
        </div>
      </section>
      <section className='flex justify-between items-center'>
        <Button text='Remove'/>
        <Switch id={ name } isChecked={ isActive }/>
      </section>
    </article>
  )
}