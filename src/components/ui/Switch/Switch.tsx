import type { SwitchProps } from './switch.types'

export function Switch({ isChecked, id }: SwitchProps) {
  return (
    <label className='dark:bg-Neutral-600 bg-Neutral-300 flex items-center w-10 h-5 rounded-3xl p-0.5 before:content-[""] before:inline-block before:size-4 before:bg-Neutral-100 before:rounded-full has-checked:before:translate-x-5 has-checked:bg-Red-500 before:transition-transform transition-colors cursor-pointer' htmlFor={`${id}_switch`}>
        <input className='hidden' type="checkbox" name="switch" id={`${id}_switch`} defaultChecked={ isChecked }/>
    </label>
  )
}