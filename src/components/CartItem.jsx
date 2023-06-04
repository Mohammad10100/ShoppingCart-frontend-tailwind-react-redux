import React from 'react'
import {FcDeleteDatabase} from 'react-icons/fc'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast';
import {remove} from '../redux/Slices/CartSlice'

export default function CartItem({item, itemIndex}) {
  const dispatch= useDispatch();
  const removeFromCart = ()=>{
    dispatch(remove(item.id));
    toast.error("Item Removed From Cart")
  }
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="h-[100px]">
          <img  className="h-full w-full" src={item.image} />
        </div>
        <div>
          <p className="text-gray-700 font-semibold text-lg text-left truncate w-80 mt-1">{item.title}</p>
          <p className="text-gray-400 font-normal text-[10px] text-left w-80">{item.description.split(" ").splice(0,20).join(" ") + "..."}</p>
          <div className="flex justify-between">
            <p>{`$${item.price}`}</p>
            <div onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}
