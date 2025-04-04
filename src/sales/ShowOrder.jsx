// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const ShowOrder = () => {
//   const [order, setOrder] = useState(null);
//   const [orderDetails, setOrderDetails] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const { id } = useParams(); 
//   console.log(id);

//   // Fetch data from API
//   useEffect(() => {
//     axios.get(`http://localhost/laraval/laravel_project/public/api/invoicebyId/${id}`)
//       .then((response) => {
//         console.log(response.data); // Debugging API response
//         setOrder(response.data.order[0]);
//         setOrderDetails(response.data.order[0]?.order_details || []); // Ensure correct access
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err); // Debugging
//         setError(err.message);
//         setLoading(false);
//       });
//   }, [id]); // Added `id` to dependency array

//   // Function to calculate totals
//   const calculateTotal = () => {
//     if (!orderDetails || orderDetails.length === 0) return { total: 0, totalDiscount: 0, tax: 0, grandTotal: 0 };

//     let total = orderDetails.reduce(
//       (acc, item) => acc + (item.price * item.qty - item.discount),
//       0
//     );
//     let totalDiscount = orderDetails.reduce((acc, item) => acc + item.discount, 0);
//     let tax = total * 0.05;
//     let grandTotal = total + tax - totalDiscount;

//     return { total, totalDiscount, tax, grandTotal };
//   };

//   const { total, totalDiscount, tax, grandTotal } = calculateTotal();

//   // Print Invoice
//   const printInvoice = () => {
//     const printButton = document.getElementById("printButton");
//     if (printButton) {
//       printButton.style.display = "none";
//       window.print();
//       setTimeout(() => {
//         printButton.style.display = "block";
//       }, 1000);
//     }
//   };

//   // Show loading or error
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p className="text-danger">Error: {error}</p>;

//   return (
//     <div className="container mt-5">
//       <div className="card shadow-sm border-0">
//         <div className="card-body p-4">
//           <div className="invoice-wrap" id="invoice">
//             <div className="row">
//               <div className="col-md-6">
//                 <h6 className="fw-bold text-primary">Order Invoice From:</h6>
//                 <ul className="list-unstyled">
//                   <li>Invoice: NO-{order?.id}</li>
//                   <li>Phone: 01793 956 777</li>
//                   <li>Email: mdaslamcric@gmail.com</li>
//                 </ul>
//               </div>
//               <div className="col-md-6 text-end">
//                 <h6 className="fw-bold text-primary">Invoice To:</h6>
//                 <ul className="list-unstyled">
//                   <li>Customer Name: {order?.customers?.name || "N/A"}</li>
//                   <li>Address: {order?.customers?.address || "N/A"}</li>
//                   <li>Email: {order?.customers?.email || "N/A"}</li>
//                 </ul>
//               </div>
//             </div>

//             <div className="table-responsive mt-3">
//               <table className="table table-bordered">
//                 <thead className="table-light text-white bg-primary">
//                   <tr>
//                     <th>SL</th>
//                     <th>Product</th>
//                     <th>Qty</th>
//                     <th>Price</th>
//                     <th>Discount</th>
//                     <th>Subtotal</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {orderDetails.map((item, index) => {
//                     const subtotal = item.price * item.qty - item.discount;
//                     return (
//                       <tr key={index}>
//                         <td>{index + 1}</td>
//                         <td>{item.product_id || "N/A"}</td>
//                         <td>{item.qty}</td>
//                         <td>{item.price}</td>
//                         <td>{item.discount}</td>
//                         <td>{subtotal.toFixed(2)}</td>
//                       </tr>
                      
//                     );
//                   })}
//                 </tbody>
//                 <tfoot>
//                     <tr>
//                       <td colSpan="5" className="text-end">Total</td>
//                       <td>{total.toFixed(2)}</td>
//                     </tr>
//                     <tr>
//                       <td colSpan="5" className="text-end">Tax (5%)</td>
//                       <td>{tax.toFixed(2)}</td>
//                     </tr>
//                     <tr>
//                       <td colSpan="5" className="text-end">Total Discount</td>
//                       <td>{totalDiscount.toFixed(2)}</td>
//                     </tr>
//                     <tr>
//                       <td colSpan="5" className="text-end fw-bold">Grand Total</td>
//                       <td className="fw-bold">{grandTotal.toFixed(2)}</td>
//                     </tr>
//                   </tfoot>
//               </table>
//             </div>

//             <button id="printButton" className="btn btn-success me-2" onClick={printInvoice}>
//               Print
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShowOrder;






import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ShowOrder = () => {
  const [order, setOrder] = useState(null);
  const [orderDetails, setOrderDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();



  useEffect(() => {
    axios.get(`http://localhost/laraval/laravel_project/public/api/invoicebyId/${id}`)
      .then((response) => {
        console.log("API Response:", response.data); 
        setOrder(response.data.order[0]);
        setOrderDetails(response.data.order[0]?.order_details || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError(err.message);
        setLoading(false);
      });
}, [id]);





  const calculateTotal = () => {
    if (!orderDetails.length) return { total: 0, totalDiscount: 0, tax: 0, grandTotal: 0 };
    
    let total = orderDetails.reduce((acc, item) => acc + (item.price * item.qty - item.discount), 0);
    let totalDiscount = orderDetails.reduce((acc, item) => acc + item.discount, 0);
    let tax = total * 0.05;
    let grandTotal = total + tax - totalDiscount;
    
    return { total, totalDiscount, tax, grandTotal };
  };

  const { total, totalDiscount, tax, grandTotal } = calculateTotal();

  const printInvoice = () => {
    window.print();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-danger">Error: {error}</p>;

  return (
    <div className="container my-5">
      <div className="card shadow">
        <div className="card-header bg-success text-white text-center">
          <h1>Invoice</h1>
        </div>
        <div className="card-body">
          <div id="invoiceContent">
            <div className="row mb-4">
              <div className="col-md-6">
                <h5>Customer Details</h5>
                <p>Name: {order?.customer?.name || "N/A"}</p>
                <p>Email: {order?.customer?.email || "N/A"}</p>
                <p>Address: {order?.customer?.address || "N/A"}</p>
              </div>
              <div className="col-md-6 text-end">
                <h5>Invoice Details</h5>
                <p>Invoice No: #{order?.id}</p>
                <p>Date: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  {/* <th>SL</th> */}
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Discount</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.map((item, index) => (
                  <tr key={index}>
                    {/* <td>{index + 1}</td> */}
                    <td>{item.product?.name || "N/A"}</td>
                    <td>{item.qty}</td>
                    <td>{item.price}</td>
                    <td>{item.discount}</td>
                    <td>{(item.price * item.qty - item.discount).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="5" className="text-end fw-bold">Total</td>
                  <td>{total.toFixed(2)}</td>
                </tr>
                <tr>
                  <td colSpan="5" className="text-end fw-bold">Tax (5%)</td>
                  <td>{tax.toFixed(2)}</td>
                </tr>
                <tr>
                  <td colSpan="5" className="text-end fw-bold">Total Discount</td>
                  <td>{totalDiscount.toFixed(2)}</td>
                </tr>
                <tr>
                  <td colSpan="5" className="text-end fw-bold">Grand Total</td>
                  <td>{grandTotal.toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <button onClick={printInvoice} className="btn btn-primary print-btn">Print Invoice</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowOrder;
