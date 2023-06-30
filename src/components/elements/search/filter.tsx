import React from "react"

type InputComponent = {
    children : React.ReactElement
}
const Filter = ({children}:InputComponent) => {
  return (
    <div className="flex items-center">
      Filter
      {children}
      Clear
    </div>
  );
}

export default Filter