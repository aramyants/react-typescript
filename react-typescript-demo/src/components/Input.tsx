import React from 'react'

type InputProps = {
  value?: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log('Inside render handleInputChange', event)//.target.value)
  //   props.handleChange(event)
  // }
  return (
    <div><input type='text' value={props.value} onChange={props.handleChange} /></div>
  )
}
