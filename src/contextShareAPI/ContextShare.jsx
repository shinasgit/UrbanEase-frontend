import React, { createContext, useState } from 'react'


//context creation
export const searchContext = createContext()

function ContextShare({children}) {

    //global state for holding searchkey
    const [ searchKey,setSearchKey ] = useState('')

  return (
    <div>
       <searchContext.Provider value={{searchKey,setSearchKey}}>
        {children}
       </searchContext.Provider>
    </div>
  )
}

export default ContextShare