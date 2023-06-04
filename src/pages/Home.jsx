import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import Product from '../components/Product'

export default function Home() {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [items, setPosts] = useState([]);

  async function fetchProductData (){
    setLoading(true);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);
    } catch (error) {
      console.log("error aagaya");
      console.log(error);
      setPosts([]);
    }
    setLoading(false)
  }

  useEffect(()=>{
    fetchProductData();
  },[])

  return (
    <div className='h-[80vh]'>
      {
        loading? (<Spinner className=""/>):
          items.length > 0? 
            (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
              {
                items.map((item)=>{
                  return(
                    <Product key={item.id} item={item}/> 
                    )
                })
              }  
            </div>):
            (
              <div className="flex justify-center items-center">
                <p> No Data Found</p>
              </div>
            )
      }
    </div>
  )
}