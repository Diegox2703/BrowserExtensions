import type { ButtonProps } from './button.types'

export function Button({ text }: ButtonProps) {
  return (
    <button className='dark:text-Neutral-100 dark:outline dark:outline-Neutral-600 dark:hover:bg-Red-400 dark:hover:text-Neutral-900 text-Neutral-900 outline-2 outline-Neutral-300 hover:bg-Red-700 hover:text-Neutral-100 hover:outline-0 px-3.5 py-1.5 rounded-3xl cursor-pointer transition-colors'>
        { text }
    </button>
  )
}
