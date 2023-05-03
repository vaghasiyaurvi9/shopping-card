import React, { createContext, useEffect, useReducer } from 'react'
import Cart from './Cart';
import { products } from './Producrt';
import { reducer } from './Reducer';

export const contexdata = createContext();

const initialvalue = {
    item:products,
    totalamount:0,
    totalitem:0
}



const Contexapi = () => {

    const [state,dispatch] = useReducer(reducer,initialvalue);

  

    // remove item
    const removeitem =(id)=>{
 
        return dispatch({
            type:"remove",
            payload:id,
        })
    }

    //clearcart
    const clearcart = () => {
        return dispatch({
            type:"clear"
        })
    }
    const increaseitem = (id) =>{
        return dispatch({
            type:"increment",
            payload:id
        })
    }
    const decreaseitem = (id) =>{
        return dispatch({
            type:"decrement",
            payload:id
        })
    }
    useEffect(()=>{

        dispatch({ type :"get_total"});
        console.log("   ");

    },[state.item])

  return (
    <div>
        <contexdata.Provider value={{...state,removeitem,clearcart,increaseitem,decreaseitem}}>

        <Cart/>
        
        </contexdata.Provider>
      
    </div>
  )
}

export default Contexapi
