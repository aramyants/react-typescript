import type React from "react";

type InputProps = React.ComponentProps<'input'>;


export const CustomInput = (props: InputProps) => {
  return (
    <input type="text" className="custom-input" {...props} />
  );
}
