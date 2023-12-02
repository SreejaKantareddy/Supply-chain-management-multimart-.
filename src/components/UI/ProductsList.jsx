import React from 'react'
import ProductCard from './ProductCard'
// import useGetData from '../custom-hooks/useGetData'


const ProductsList = ({data}) => {
  // const {data:products,loading}=useGetData('products')

  return (
    
        <>
        {
            data?.map((item,index)=>(
                <ProductCard item={item} key={index} />
            ))
        }
       
      
       
        </>
    
  )
}

export default ProductsList