import { switchStyles } from './switch.styles'
import type { SwitchProps } from './switch.types'

export function Switch({ isChecked, id, onChange }: SwitchProps) {
  return (
    <label className={switchStyles} htmlFor={`${id}_switch`}>
        <input 
          className='hidden' 
          type="checkbox" 
          name="switch" 
          id={`${id}_switch`} 
          defaultChecked={ isChecked }
          onChange={onChange}
        />
    </label>
  )
}