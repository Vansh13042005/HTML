import React from 'react'
import Product from './Product'
import Productlist2 from './Productlist2'
import P3 from './P3'
import { BrowserRouterLink,BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Productlist3 from './Productlist3.js'
import Productlist5 from './Productlist5.js'
import Productlist6 from './Productlist6.js'


export default function App() {
  return (
    <div>
      <BrowserRouter>
      
        <div className='container123'>
          <Link to='/Product'>Product</Link>
          <Link to='/Productlist2'>Productlist2</Link>
          {/* <Link to='/Productlist2/456'></Link> */}
          <Link to='/P3'>P3</Link>
          <Link to='/Productlist3'>P4</Link>
          <Link to='/Productlist5'>p5</Link>
          <Link to='/Productlist6'>p6</Link>
          
        </div>
      <Routes>
      <Route path='/Product/:id' element={<Product></Product>}></Route>
      <Route path='/Productlist2' element={<Productlist2></Productlist2>}></Route>
      {/* <Route path='/Productlist2' element={<Productlist2></Productlist2>}></Route> */}
      <Route path='/P3' element={<P3></P3>}></Route>
      <Route path='/Productlist3' element={<Productlist3></Productlist3>}></Route>
      <Route path='/Productlist5' element={<Productlist5></Productlist5>}></Route>
      <Route path='/Productlist6' element={<Productlist6></Productlist6>}></Route>
      
      </Routes>
      </BrowserRouter>
    </div>
  )
}
