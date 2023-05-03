import React, { useContext } from 'react'
import Items from './Items'
// import { products } from './Producrt'
import {contexdata} from './Contexapi' 
import { FaCartPlus } from "react-icons/fa";

const Cart = () => {
    // const [item,setitem]= useState(products);
   let {item,clearcart,totalitem,totalamount}= useContext(contexdata); 

   if(item.length === 0)
   {
    return(
        <>
            <h1>Shopping Cart</h1>
            <p> you have <span>{totalitem}</span> item in shopping cart</p>
        </>
    )

   }

  return (
    <div>
            <h1>Shopping Cart  </h1>
            <FaCartPlus className='fs-1'/><span className='circle text-white translate-middle top-0 start-0'>  {totalitem}</span>

            <p> you have <span className='fs-2 '>{totalitem}</span> item in shopping cart</p>
            {
                item.map((currentitem)=>{
                    
                    return   <Items {...currentitem} />
                })
            }
          

            <div>
                <h1>TOTAL : {totalamount}₹ </h1>
              
            </div>
            <div>
                <p className='btn btn-outline-danger' onClick={clearcart}>Clear Cart</p>
            </div>
      
    </div>
  )
}

export default Cart
