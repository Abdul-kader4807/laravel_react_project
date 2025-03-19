// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";

// const Invoice = () => {
//    const baseUrl="http://localhost/project/admin";
//    const [suppliers, setSuppliers] = useState([])
//    const [selectedSupplier, setselectedSupplier] = useState(null)
//    const [warehouse, setWareHouse] = useState([])
//    const [selectedwarehouse, setSelectedWareHouse] = useState(null)

//   //  const [products, setProducts] = useState([])

//    const handleSelectedSupplier=(e)=>{
//          const {value}= e.target
//          setselectedSupplier( JSON.parse(value))
//    }
//    const handleSelectedwarehouse=(e)=>{
//          const {value}= e.target
//          setSelectedWareHouse( JSON.parse(value))
//    }
     
//    console.log(selectedSupplier);
   
//    const fetchSuppliers=()=>{
//     axios.get(baseUrl+"/api/Supplier/")
//     .then(res=>{
//       // console.log(res);
//       setSuppliers(res.data.suppliers)
//     })
//    }
//    const fetchWareHouse=()=>{
//     axios.get(baseUrl+"/api/warehouse/")
//     .then(res=>{
//        //console.log(res);
//        setWareHouse(res.data.warehouses)
//     })
//    }
//   //  const fetchProducts=()=>{
//   //   axios.get(baseUrl+"/api/product/")
//   //   .then(res=>{
//   //      //console.log(res);
//   //      setProducts(res.data.products)
//   //   })
//   //  }
   
//    useEffect(() => {
//     fetchSuppliers()
//     fetchWareHouse()
//     // fetchProducts()
//    }, [])
   




//   return (
//     <div className="container my-5">
//       <div className="card shadow">
//         <div className="card-header bg-primary text-white text-center">
//           <h1 className="mb-0">Invoice</h1>
//         </div>
//         <div className="card-body">
//           {/* Invoice Details */}
//           <div className="row mb-4">


//             <div className="col-md-4">
//               <h5>Supplier</h5>
//               <select onChange={handleSelectedSupplier} className="form-select mb-2" name="supplier">
//                 <option>Select Supplier</option>

//                 {suppliers?.map((data, i)=>(
//                   <>
//                    <option value={JSON.stringify(data)} key={data.id}>{data.name}</option>
//                   </>
//                 ))}


//               </select>
//               <p className="mb-1">Phone: {selectedSupplier && selectedSupplier.mobile} <span id="phone">-</span></p>
//               <p>Email:  {selectedSupplier && selectedSupplier.email} <span id="email">-</span></p>
//             </div>
//             <div className="col-md-4">
//               <h5>Warehouse</h5>
//               <select onChange={handleSelectedwarehouse} className="form-select">
//                 <option>Select Warehouse</option>
//                 {warehouse?.map((data, i)=>(
//                   <>
//                    <option  value={JSON.stringify(data)} key={data.id}>{data.name}</option>
//                   </>
//                 ))}
//               </select>
//               <p className="mb-1">Phone: {selectedwarehouse && selectedwarehouse.contact} <span id="phone">-</span></p>
//               <p>City:  {selectedwarehouse && selectedwarehouse.city} <span id="email">-</span></p>
//             </div>
//             <div className="col-md-4">
//               <h5>Invoice Details</h5>
//               <p>Invoice No: <strong>#12345</strong></p>
//               <p>Date: <strong>{new Date().toLocaleDateString()}</strong></p>
//               <div>
//                 Delivery Date:
//                 <input type="date" className="form-control mt-1" />
//               </div>
//             </div>
//           </div>

//           {/* Product Table */}
//           <table className="table table-bordered">
//             <thead>
//               <tr>
//                 <th>Item</th>
//                 <th>Quantity</th>
//                 <th>Unit Price</th>
//                 <th>Discount</th>
//                 <th>Total</th>
//                 <th>Action</th>
//               </tr>
//               <tr>
//                 <td>
//                   <select className="form-select">
//                     <option>Select Product</option>
//                     {products?.map((data, i)=>(
//                   <>
//                    <option value={JSON.stringify(data)} key={data.id}>{data.name}</option>
//                   </>
//                 ))}
//                   </select>
//                 </td>
//                 <td><input type="number" className="form-control" placeholder="Qty" /></td>
//                 <td><input type="number" className="form-control" placeholder="Price" /></td>
//                 <td><input type="number" className="form-control" placeholder="Discount" /></td>
//                 <td>-</td>
//                 <td>
//                   <button className="btn btn-info">Add</button>
//                 </td>
//               </tr>
//             </thead>
//             <tbody id="data_append">
//               {/* Dynamically added rows will appear here */}
//             </tbody>
//             <tfoot>
//               <tr>
//                 <td colSpan="4" className="text-end">Discount</td>
//                 <td>$0.00</td>
//                 <td></td>
//               </tr>
//               <tr>
//                 <td colSpan="4" className="text-end">Tax</td>
//                 <td>$0.00</td>
//                 <td></td>
//               </tr>
//               <tr>
//                 <td colSpan="4" className="text-end">Subtotal</td>
//                 <td>$0.00</td>
//                 <td></td>
//               </tr>
//               <tr>
//                 <td colSpan="4" className="text-end fw-bold">Total</td>
//                 <td className="fw-bold">$0.00</td>
//                 <td></td>
//               </tr>
//             </tfoot>
//           </table>

//           {/* Footer Actions */}
//           <div className="d-flex justify-content-between mt-4">
//             <button className="btn btn-danger">Clear All</button>
//             <button className="btn btn-success">Process</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Invoice;
