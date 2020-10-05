import React from 'react'

export default function DayRenderProp({render}) {
  const [state,setState] = useState(); 
  
  return (
    {render(state)}
  )
}
