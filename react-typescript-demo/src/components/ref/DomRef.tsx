import React, { useEffect, useRef } from 'react'

export const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
    return () => {

    };
  }, []);
  return (
    <div>
      <input type='text' ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>Focus Input</button>
    </div>
  )
}
