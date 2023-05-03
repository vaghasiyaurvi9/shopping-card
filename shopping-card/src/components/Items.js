import React, { useContext } from 'react'
import { FaPlusCircle,FaMinusCircle } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { contexdata } from './Contexapi';

const Items = ({ title, discription, img, price,id,quantity}) => {

   let {removeitem,increaseitem,decreaseitem}= useContext(contexdata);
    return (
        <div>
            <div className="">
                <div className="row ">
                    <div className="col-3">
                        <img src={img} alt="" className='w-25 h-50' />
                      
                    </div>
                    <div className="col-3">
                        <p> TITLE :{title}</p>
                        <span>{discription}</span>
                      
                    </div>
                    <div className="col-3">
                        <FaPlusCircle onClick={()=>{increaseitem(id)}} className='me-2'/>
                        <input type="text" size="2" placeholder={quantity}/>
                        <FaMinusCircle onClick={()=>{decreaseitem(id)}} className='ms-2'/>
                    </div>
                    <div className='col-2'>
                    <p> price: {price} ₹</p>
                    </div>
                    <div className='col-1 fs-4 text-danger deleteitem'>
                        <AiFillDelete onClick={()=>removeitem(id)} className=""/>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Items
