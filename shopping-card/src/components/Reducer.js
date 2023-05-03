export const reducer=(state,action)=>{
    if(action.type === "remove")
    {
        return{
            ...state,
            item : state.item.filter((data)=>{
                return  data.id !== action.payload 
            })
        }
    }
    if(action.type === "clear")
    {
        return {
            ...state,
            item:[]
        }
    } 
    if(action.type === 'increment')
    {
            let updatecart = state.item.map((currentele)=>{
                if(currentele.id === action.payload)
                {
                    return { ...currentele, quantity:currentele.quantity + 1 };
                }
                return currentele;
            })

            return {...state,item:updatecart}
    }
    if(action.type === 'decrement')
    {
        let decreasenum = state.item.map((getdata)=>{
            if(getdata.id === action.payload)
            {
                return{...getdata,quantity:getdata.quantity -1 }
            }
            
            return getdata;
        }).filter((getdata)=>{

            return getdata.quantity !== 0 
        })
        return {...state,item:decreasenum}
    }

    if(action.type === 'get_total')
    {
        let {totalitem,totalamount} = state.item.reduce((accum,curval)=>{
            let {quantity,price} = curval;
            
            let total = price * quantity;
            accum.totalamount +=total;
            accum.totalitem += quantity;
            return accum;
        },{
            totalitem : 0,
            totalamount: 0
        })
        return{...state,totalitem,totalamount};
    }

        return state; 
}