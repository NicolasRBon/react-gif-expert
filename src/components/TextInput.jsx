import { useState } from "react"
export const TextInput = ({onNewInputValue}) => {
    
  const [inputValue, setInputValue] = useState('')

  const onInputValueChangeHandler = event => {
      setInputValue(event.target.value)
  }
  const onSubmit = event => {
    event.preventDefault()
    if(inputValue.length > 1)
    onNewInputValue(inputValue.trim())
    setInputValue('')
  }

  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text" 
        value={inputValue} 
        onChange={onInputValueChangeHandler} 
        />
    </form>
  )

}
