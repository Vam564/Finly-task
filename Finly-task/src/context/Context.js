  
import React,{createContext} from 'react';
import useAPI from './useAPI'
export const Context = createContext();
export const ContextProvider = props => {

    return(
        <Context.Provider value={{...useAPI()}}>
            {props.children}
        </Context.Provider>
    )}

export default Context
