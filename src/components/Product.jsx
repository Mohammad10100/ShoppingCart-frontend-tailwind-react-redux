import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/Slices/CartSlice';

export default function Product({item}) {
  const {cart} = useSelector((state)=> state)
  const dispatch = useDispatch();

  const addToCart =()=>{
    dispatch(add(item))
    console.log(item);
    toast.success("Item Added To Cart")
  }
  const removeFromCart =()=>{
    dispatch(remove(item.id))
    toast.error("Item Removed From Cart")
  }
  
  return (
    <>
    <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-2xl">
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</p>
      </div>
      <div>
        <p className=" w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").splice(0,10).join(" ") + "..."}</p>
      </div>
      
      <div  className="h-[180px]">
        <img src={item.image} className="h-full w-full"/>
      </div>
      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold ">${item.price}</p>
        </div>
        <div>
          {
            cart.some((itemInCart) =>itemInCart.id == item.id)? 
            (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
            text-[12px] p-1 px-3 uppercase
            hover:bg-gray-700 hover:text-white
            duration-300 ease-in "
               onClick={removeFromCart}>remove item</button>): 
            (<button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold
            text-[12px] p-1 px-3 uppercase
            hover:bg-gray-700 hover:text-white
            duration-300 ease-in "
               onClick={addToCart}>add to cart</button>)
          }
        </div>
      </div>
    </div>
    </>
  )
}
