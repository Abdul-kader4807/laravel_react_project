import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PageContent from "./components/PageContent";
import Index from "./page/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Invoice from "./page/Invoice";
import Abc from "./page/Abc";
import { Helmet } from "react-helmet";
import Home from "./page/Home";
// import Purchase from "./page/Purchase";
import Product from "./page/Product";
import Category from "./page/Category";
import Uom from "./page/Uom";
// import Order from "./page/Order";
import ManageCus from "./customer/ManageCus";
import CreateCus from "./customer/CreateCus";


import Order_details from "./page/Order_details";
import Status from "./page/Status";
import Stock from "./page/Stock";
import Stock_report from "./page/Stock_report";
import ManageOrder from "./sales/ManageOrder";
import CreateOrder from "./sales/CreateOrder";
import CreatePurchase from "./purchase/CreatePurchase";
import ManagePurchase from "./purchase/ManagePurchase";



// import Header from '../components/Header'
// import Sidebar from '../components/Sidebar'
// import PageContent from '../components/PageContent'

const App = () => {
  return (
    <>
      {/* <Index/> */}
      <Header />
      <PageContent />
      <BrowserRouter>
      <Sidebar />
        <Routes>
          <Route path="/" element={<PageContent />}>
            <Route path="/" element={<Home />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/purchase" element={<CreatePurchase />} />
            <Route path="/purchase_detail" element={<ManagePurchase />} />

            <Route path="/product" element={<Product />} />
            <Route path="/category" element={<Category />} />
            <Route path="/uom" element={<Uom />} />
            <Route path="/order" element={<CreateOrder/>} />
            <Route path="/order_detail" element={<ManageOrder/>}/>
           <Route path="/customercreate" element={<CreateCus/>} />
            <Route path="/order_details" element={<Order_details />} />
            <Route path="/status" element={<Status />} />
            <Route path="/stock" element={<Stock />} />
            <Route path="/stock_report" element={<Stock_report />} />
            <Route path="/customer" element ={<ManageCus/>}/>
            
            
            
          </Route>
        </Routes>
      </BrowserRouter>
      <Helmet>
        <script src="assets/libs/jquery/jquery.min.js"></script>
        <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/libs/metismenu/metisMenu.min.js"></script>
        <script src="assets/libs/simplebar/simplebar.min.js"></script>
        <script src="assets/libs/node-waves/waves.min.js"></script>

        <script src="unicons.iconscout.com/release/v2.0.1/script/monochrome/bundle.js"></script>

        <script src="assets/js/app.js"></script>
      </Helmet>
    </>
  );
};

export default App;
