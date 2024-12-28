import React, { useState } from 'react'
 import { createContext } from 'react'
export const UserDataContext=createContext()

const [user,setUser]=useState({
    fullName:{
        firstName:"",
        lastName:""
    },
    
})

const UserContext = ({children}) => {
  return (
    <div>   
        <UserDataContext.Provider> {children}</UserDataContext.Provider>
     
    </div>
  )
}

export default UserContext
