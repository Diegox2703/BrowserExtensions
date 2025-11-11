import { buttonStyles } from './button.styles'
import type { ButtonProps } from './button.types'

export function Button({ text, onClick }: ButtonProps) {
  return (
    <button 
      className={buttonStyles}
      onClick={onClick}
    >
        { text }
    </button>
  )
}
