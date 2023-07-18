import { useReducer } from "react";
import { createContext } from "react";
import Reducer from "./Reducer";
const Initialstate={
    user:{
        name:"name",
        password:"sss"
    },
    isFetching:false,
    error:false,
}

export const AuthContext=createContext(Initialstate)

export const AuthContextProvider=({children})=>{
 const [state,dispatch]=useReducer(Reducer,Initialstate)

 return(
    <AuthContext.Provider
    value={{
        user:state.user,
        isFetching:state.isFetching,
        error:state.error,
        dispatch,
    }
}>
    {children}
    </AuthContext.Provider>
 )
}