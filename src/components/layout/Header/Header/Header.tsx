import { Logo } from '../Logo'
import { ThemeBtn } from '../ThemeBtn'
import { headerStyles } from './header.styles'

export function Header() {
  return (
    <header className={headerStyles}>
      <Logo/>
      <ThemeBtn/>
    </header>
  )
}
