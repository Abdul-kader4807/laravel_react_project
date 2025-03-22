// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Cart from "../cartComponent/Cart";
// import { useParams } from "react-router-dom";

// const ShowOrder = () => {
//   // State variables
//   const [customers, setCustomers] = useState([]);
//   const [warehouse, setWarehouse] = useState([]);
//   const [item, setItem] = useState([]);
//   const [selectedCustomer, setSelectedCustomer] = useState(null);
//   const [selectedWarehouse, setSelectedWarehouse] = useState(null);
//   const [summaryCount, setSummaryCount] = useState({
//     discount: 0,
//     tax: 0,
//     subtotal: 0,
//     total: 0,
//   });
// const {id}=useParams()
// // console.log(id)

//   // Fetch data from API on component mount
//   useEffect(() => {
//     // Fetch customers data
//     axios.get(`http://localhost/laraval/laravel_project/public/api/invoicebyId/${id}`)
//       .then(response => {
//        console.log(response)
       
//       })
//       .catch(error => {
//         console.error("Error fetching customers data", error);
//       });

//     // Fetch warehouse data
//     axios.get("https://api.example.com/warehouse")
//       .then(response => {
//         setWarehouse(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching warehouse data", error);
//       });

//     // Fetch items data (example: products)
//     axios.get("https://api.example.com/items")
//       .then(response => {
//         setItem(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching items data", error);
//       });
//   }, []);

//   // Calculate Summary
//   const calculateSummary = () => {
//     const subtotal = item.reduce((sum, item) => sum + parseFloat(item.subtotal), 0);
//     const discount = item.reduce((sum, item) => sum + parseFloat(item.total_discount), 0);
//     const tax = subtotal * 0.15;
//     const total = subtotal + tax;

//     setSummaryCount({
//       discount: discount,
//       tax: tax,
//       subtotal: subtotal,
//       total: total,
//     });
//   };

//   useEffect(() => {
//     calculateSummary();
//   }, [item]);

//   // Handle Print Invoice
//   const printInvoice = () => {
//     const invoiceContent = document.getElementById("invoiceContent").innerHTML;
//     const printWindow = window.open("", "_blank", "width=800, height=600");
//     printWindow.document.write(`
//       <html>
//         <head>
//           <title>Invoice</title>
//           <style>
//             body { font-family: Arial, sans-serif; }
//             .invoice-container { margin: 20px; }
//             .invoice-header { text-align: center; margin-bottom: 20px; }
//             .invoice-header h1 { margin: 0; }
//             .invoice-details { margin-bottom: 20px; }
//             table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
//             th, td { padding: 8px; text-align: left; border: 1px solid #ddd; }
//             .total-summary td { font-weight: bold; }
//             .footer { text-align: center; margin-top: 20px; }
//           </style>
//         </head>
//         <body>
//           <div class="invoice-container">
//             <div id="invoiceContent">${invoiceContent}</div>
//           </div>
//           <script>
//             window.onload = function () {
//               window.print();
//               window.onafterprint = function () {
//                 window.close();
//               };
//             };
//           </script>
//         </body>
//       </html>
//     `);
//     printWindow.document.close();
//   };

//   return (
//     <div className="container my-5">
//       <div className="card shadow">
//         <div className="card-header bg-success text-white text-center">
//           <h1 className="mb-0">Invoice</h1>
//         </div>
//         <div className="card-body">
//           {/* Invoice Content */}
//           <div id="invoiceContent">
//             <div className="row mb-4">
//               {/* Customer and Warehouse Information */}
//               <div className="col-md-4">
//                 <h5>Customer</h5>
//                 <select
//                   onChange={(e) => setSelectedCustomer(JSON.parse(e.target.value))}
//                   className="form-select mb-2"
//                   name="customer"
//                 >
//                   <option value="">Select Customer</option>
//                   {customers?.map((customer) => (
//                     <option key={customer.id} value={JSON.stringify(customer)}>
//                       {customer.name}
//                     </option>
//                   ))}
//                 </select>
//                 <p className="mb-1">Phone: {selectedCustomer?.phone}</p>
//                 <p>Email: {selectedCustomer?.email}</p>
//                 <p>Address: {selectedCustomer?.address}</p>
//               </div>
//               <div className="col-md-4">
//                 <h5>Warehouse</h5>
//                 <select onChange={(e) => setSelectedWarehouse(JSON.parse(e.target.value))} className="form-select">
//                   <option>Select Warehouse</option>
//                   {warehouse?.map((data) => (
//                     <option key={data.id} value={JSON.stringify(data)}>
//                       {data.name}
//                     </option>
//                   ))}
//                 </select>
//                 <p className="mb-1">Phone: {selectedWarehouse?.phone}</p>
//                 <p>City: {selectedWarehouse?.address}</p>
//               </div>
//               <div className="col-md-4">
//                 <h5>Invoice Details</h5>
//                 <p>Invoice No: <strong>#12345</strong></p>
//                 <p>Date: <strong>{new Date().toLocaleDateString()}</strong></p>
//                 <div>
//                   Delivery Date:
//                   <input type="date" className="form-control mt-1" />
//                 </div>
//               </div>
//             </div>

//             {/* Product Table */}
//             <table className="table table-bordered">
//               <thead>
//               <tr>
//                   <th>Item</th>
//                   <th>Strength</th>
//                   <th>Quantity</th>
//                   <th>Unit Price</th>
//                   <th>Discount</th>
//                   <th>Total</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {item?.map((data) => (
//                   <tr key={data.item_id}>
//                     <td>{data.name}</td>
//                     <td>{data.strength}</td>
//                     <td>{data.qty}</td>
//                     <td>{data.price}</td>
//                     <td>{data.discount}</td>
//                     <td>{data.subtotal}</td>
//                   </tr>
//                 ))}
//               </tbody>
//               <tfoot>
//                 <tr>
//                   <td colSpan="4" className="text-end fw-bold">Discount</td>
//                   <td className="fw-bold">{summaryCount.discount}</td>
//                 </tr>
//                 <tr>
//                   <td colSpan="4" className="text-end fw-bold">Tax</td>
//                   <td className="fw-bold">${summaryCount.tax}</td>
//                 </tr>
//                 <tr>
//                   <td colSpan="4" className="text-end fw-bold">Subtotal</td>
//                   <td className="fw-bold">${summaryCount.subtotal}</td>
//                 </tr>
//                 <tr>
//                   <td colSpan="4" className="text-end fw-bold">Total</td>
//                   <td className="fw-bold">${summaryCount.total}</td>
//                 </tr>
//               </tfoot>
//             </table>
//           </div>

//           {/* Footer Actions */}
//           <div className="d-flex justify-content-between mt-4">
            
//             <button onClick={printInvoice} className="btn btn-primary">Print Invoice</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShowOrder;
