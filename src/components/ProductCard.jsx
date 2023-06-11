import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProductCard({photo,name,price,desc,slug}) {
    const navigate=useNavigate()
  return (
    <div className="
    m-1 shadow-2xl p-2 rounded-lg hover:scale-105 cursor-pointer w-[300px] " onClick={() => navigate(`/product/${slug}`)}>
    <img
      src={photo}
      className="h-[200px]"
      alt="not avaliable"
    />
        <h5 className="">{name}</h5>
        <h5 className="">
          {price.toLocaleString("en-IN", {
            style: "currency",
            currency:"INR",
          })}
        </h5>
      <p className="">
        {desc.substring(0, 60)}...
      </p>
  </div>
  )
}
