// import axios from 'axios'
// import React from 'react'
// import AllProducts from '@/components/products/allProducts'
// const getProducts = async () =>{
//   const {products} = await axios.get(`${process.env.CLIENT_URL}/api/products`)
//   return  products;
// }
// const page = async() => {
//   const ProductData=await getProducts();
//   return (
//     <>
//     <AllProducts products={ProductData}/>
//     </>
//   )
// }

// export default page

import Footer from '@/components/Global/Footer'
import React from 'react'
import HomePage from '@/components/Home'


const page = () => {
  return (
    <>
    <HomePage/>
    <Footer/>
    </>
  )
}

export default page