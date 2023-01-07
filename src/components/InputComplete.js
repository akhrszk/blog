import React from "react"
import Input from "./Input"

const InputComplete = props => {
  const { name, options, ...otherProps } = props
  return (
    <>
      <Input list={name} {...otherProps} />
      <datalist id={name}>
        {options.map(v => (
          <option>{v}</option>
        ))}
      </datalist>
    </>
  )
}

export default InputComplete
