import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard'
import { getAllProducts, getPhoto } from '../../services/apiEndpoints'

export default function DealofDay() {
    const [products, setProducts] = useState([]);
    const[clearence,setClearence]=useState([])

    useEffect(()=>{
       async function dealofday(){
           await getAllProducts(1)
           .then(res=>{
const prd=res.data.products.filter(itm=>{return itm.tags.includes('dod')})
const prd2=res.data.products.filter(itm=>{return itm.tags.includes('clearence')})
setProducts(prd)
setClearence(prd2)
           }).catch(error=>{

           })
        }

        dealofday()
    },[])


  return (
    <div>
    <div className='m-2'>
    <h1>Deal Of Day</h1>
    <div className='flex gap-1'>
    {products.map((p,index)=>(
    <ProductCard key={index} photo={getPhoto(p._id)} name={p.name} slug={p.slug} desc={p.description} price={p.price}/>
    ))}
    </div>
    </div>

{/* clearence sale */}
<div className='m-2'>
  <h2>Clearence Deal</h2>
  <div className='flex gap-1'>
    {clearence.map((p,index)=>(
    <ProductCard key={index} photo={getPhoto(p._id)} name={p.name} slug={p.slug} desc={p.description} price={p.price}/>
    ))}
    </div>
</div>

    </div>
  )
}
