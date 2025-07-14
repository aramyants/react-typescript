import React from 'react'
import type { Greet } from '../Greet'

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>{props.}</div>
  )
}
