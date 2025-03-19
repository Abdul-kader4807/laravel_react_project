import React from 'react'
import Footer from './Footer'
// import Invoice from './Invoice'
import { Outlet } from 'react-router-dom'
// import Header from './Header'
// import Sidebar from './Sidebar'

const PageContent = () => {
  return (
   <>
   
 
 <div className="main-content">
 
          <Outlet />
          {/* <Invoice/>. */}
   
     <Footer/>
</div>


   </>
  )
}

export default PageContent