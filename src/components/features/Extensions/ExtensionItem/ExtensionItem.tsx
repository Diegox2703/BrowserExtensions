import { Button, Switch } from '@/components/ui'
import type { ExtensionProps } from './extension-item.types'
import { useExtension } from '@/context'
import { extensionItemStyles } from './extensionItem.styles'

export function ExtensionItem({ logo, name, description, isActive }: ExtensionProps) {
  const { removeExtension, checkExtension } = useExtension()

  return (
    <article className={extensionItemStyles.container}>
      <section className={extensionItemStyles.detailsSection}>
        <div>
            <img className={extensionItemStyles.image} src={ logo } alt="extension-image"/>
        </div>
        <div className={extensionItemStyles.detailsWrapper}>
            <h1 className={extensionItemStyles.name}>{ name }</h1>
            <p className={extensionItemStyles.description}>{ description }</p>
        </div>
      </section>
      <section className={extensionItemStyles.actionBtns}>
        <Button onClick={() => removeExtension(name)} text='Remove'/>
        <Switch onChange={() =>checkExtension(name)} id={ name } isChecked={ isActive }/>
      </section>
    </article>
  )
}