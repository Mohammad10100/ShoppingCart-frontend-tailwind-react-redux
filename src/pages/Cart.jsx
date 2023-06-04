import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom';



export default function Cart() {

  const { cart } = useSelector((state) => state)
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0))
  }, [cart])

  return (
    <>
      {
        cart.length > 0 ?
          (<>
            <div className="grid grid-cols-3 relative">
              <div className="flex flex-col col-span-2 justify-center w-[40vw] max-w-[60vw] p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                {cart.map((item, index) => (
                  <CartItem key={item.id} item={item} itemIndex={index} />
                ))}
              </div>
              <div className="summary fixed mt-5 mr-5 top-20 right-20 bottom-0 flex flex-col justify-between h=[80vh] max-h-[80vh]">
                <div className="">
                  <div className="font-semibold text-[30px]">Your Cart</div>
                  <div className=" text-yellow-500 font-bold text-[50px]">Summary</div>
                  <p>
                    <span className="font-semibold">Total Items: <span className="text-green-500">{cart.length}</span></span>
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Total Amount: <span className="text-green-500 ">{totalAmount}</span></p>
              </div>
                </div>
            </div>
          </>) :
          (
            <>
            <div className='flex items-center flex-col justify-center h-[80vh]'>
              <div className='font-bold text-2xl '>Nothing to show</div>
              <Link to="/">
                <button className='font-semibold mt-4 bg-green-500 text-white rounded-xl p-2'>Shop Now</button>
              </Link>
            </div>
            </>
          )
        }
    </>
  )
}
