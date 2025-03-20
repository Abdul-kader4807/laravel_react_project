// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Cart from "../cartComponent/Cart";

// const Purchase = () => {
//   //work 1
//   const baseUrl = "http://localhost/class_practice/project";

//   //  const cart= new Cart("purchase")
//   const cart = Cart('purchase');
//   const [suppliers, setSuppliers] = useState([])
//   const [selectedSupplier, setselectedSupplier] = useState(null)
//   const [warehouse, setWareHouse] = useState([])
//   const [selectedwarehouse, setSelectedWareHouse] = useState(null)
//   const [summaryCount, setSummaryCount] = useState({
//        discount:0,
//        tax:0,
//        subtotal:0,
//        total:0
//   })

//   const [purchaseProcess, setPurchaseProcess] = useState({
//       supplier_id:0,
//       warehouse_id:0,
//       products:[],
//       total_purchase:0,
//       discount:0,
//       vat:0
//   })


//   const [item, setItem] = useState({
//     name:"",
//     item_id:0,
//     qty:1,
//     price:0,
//     discount: 0,
//     total_discount:0,
//     subtotal: 0
//   })
//   const [items, setItems] = useState( cart.getCart() )


//   const handleSetItem = (e) => {
//     const { name, value } = e.target
//     if (name == "product") {
//       let productData = JSON.parse(value)
//       setItem((prev) => ({
//         ...prev,
//         name: productData.name,
//         strength: productData.strength,
//         item_id: productData.id,
//         qty: 1,
//         price: productData.offer_price,
//         subtotal:productData.offer_price
//       }))
//     }
//     if (name == "qty") {
//       setItem((prev) => ({
//         ...prev,
//         qty: value,
//         subtotal: prev.price * value
//       }))
//     }

//     if (name == "discount") {
//       setItem((prev) => ({
//         ...prev,
//         discount: value,
//         total_discount:(prev.qty * value),
//         subtotal: (prev.price * prev.qty) - (prev.qty * value)
//       }))
//     }

//     // setItem((prev) => ({
//     //   ...prev,
//     //   [name]:value, 
//     // }))

//   }

//   // calculate summary

 

//   const calcualtion = () => {
    
//     const subtotal = items.reduce((sum, item) => (sum +  parseFloat(item.subtotal)), 0);
//     const discount = items.reduce((sum, item) => (sum +  parseFloat(item.total_discount)), 0);
//     const tax = subtotal * 0.15
//     const total= subtotal+ tax;

//     setSummaryCount({
//       discount:discount,
//       tax:tax,
//       subtotal:subtotal,
//       total:total
//     })
   
// };


// useEffect(() => {
//   calcualtion()
// }, [items])


//   const handleSetAllItems = (e) => {
//    // console.log(item);
    
//     cart.save(item)
//     setItems(cart.getCart())
//     setItem({
//       name: "",
//       item_id:0,
//       qty:1,
//       price: 0,
//       discount: 0,
//       subtotal: 0,
//       total_discount:0
//     })
//   }

//   // delete item 
//   const handleitemdelete=(id)=>{
//      cart.deleteItem(id)
//      setItems(cart.getCart())
//   }
//   const handleDeleteAllItems=()=>{
//      cart.clearCart()
//      setItems(cart.getCart())
//   }

//   const [products, setProducts] = useState([])

//   const handleSelectedSupplier = (e) => {
//     const { value } = e.target
//     setselectedSupplier(JSON.parse(value))
//   }
//   const handleSelectedwarehouse = (e) => {
//     const { value } = e.target
//     setSelectedWareHouse(JSON.parse(value))
//   }

//  // console.log(selectedSupplier);

//   const fetchSuppliers = () => {
//     axios.get("http://localhost/laraval/laravel_project/public/api/suppliers")
//       .then(res => {
//         // console.log(res);
//         setSuppliers(res.data.suppliers)
//       })
//   }
//   const fetchWareHouse = () => {
//     axios.get("http://localhost/laraval/laravel_project/public/api/warehouses")
//       .then(res => {
//         //console.log(res);
//         setWareHouse(res.data.warehouses)
//       })
//   }
//   const fetchProducts = () => {
//     axios.get("http://localhost/laraval/laravel_project/public/api/products")
//       .then(res => {
//         //console.log(res);
//         setProducts(res.data.products)
//       })
//   }

//   useEffect(() => {
//     fetchSuppliers()
//     fetchWareHouse()
//     fetchProducts()
//     setItems(cart.getCart())

//   }, [])

//   const handleProcess=()=>{
//     //  alert()
//      const data= {
//       supplier_id: selectedSupplier.id ,
//       warehouse_id:selectedwarehouse.id ,
//       products:items,
//       total_purchase:summaryCount.total,
//       discount:summaryCount.discount,
//       vat:summaryCount.tax
//      }


//     // setPurchaseProcess({
//     //   supplier_id: selectedSupplier.id ,
//     //   warehouse_id:selectedwarehouse.id ,
//     //   products:items,
//     //   purchase_total:summaryCount.total,
//     //   discount:summaryCount.discount,
//     //   vat:summaryCount.tax

//     // })

//     console.log(data);
    

//     axios.post("http://localhost/laraval/laravel_project/public/api/saveReactpurchase",data)
//     .then(res=>{
//       console.log(res.data);
//       cart.clearCart()
//       setItems(cart.getCart())
//       setSelectedWareHouse(null)
//       setselectedSupplier(null)
//     })
//     .catch(err=>{
//         console.log(err);
        
//     })

//  }





//   return (
//     <>
//      <div className="container my-5">
//       <div className="card shadow">
//         <div className="card-header bg-success text-white text-center">
//           <h1 className="mb-0">Invoice</h1>
//         </div>
//         <div className="card-body">
//           {/* Invoice Details */}
//           <div className="row mb-4">


//             <div className="col-md-4">
//               <h5>Supplier</h5>
//               {/* <select onChange={handleSelectedSupplier} className="form-select mb-2" name="supplier">
//                 <option>Select Supplier</option>

//                 {suppliers?.map((data, i) => (
//                   <>
//                     <option value={JSON.stringify(data)} key={data.id}>{data.name}</option>
//                   </>
//                 ))}
//               </select> */}

// <select onChange={(e) => setselectedSupplier(JSON.parse(e.target.value))} className="form-select mb-2" name="supplier">
//     <option value="">Select Supplier</option>
//     {suppliers?.map((supplier) => (
//         <option key={supplier.id} value={JSON.stringify(supplier)}>
//             {supplier.name}
//         </option>
//     ))}
// </select>



//               <p className="mb-1">Phone: {selectedSupplier && selectedSupplier.phone} <span id="phone"></span></p>
//               <p>Email:  {selectedSupplier && selectedSupplier.email} <span id="email"></span></p>
//               <p>Address:  {selectedSupplier && selectedSupplier.address} <span id="address"></span></p>
//             </div>
//             <div className="col-md-4">
//               <h5>Warehouse</h5>
//               <select onChange={handleSelectedwarehouse} className="form-select">
//                 <option>Select Warehouse</option>
//                 {warehouse?.map((data, i) => (
//                   <>
//                     <option value={JSON.stringify(data)} key={data.id}>{data.name}</option>
//                   </>
//                 ))}
//               </select>
//               <p className="mb-1">Phone: {selectedwarehouse && selectedwarehouse.phone} <span id="phone"></span></p>
//               <p>City:  {selectedwarehouse && selectedwarehouse.address} <span id="address"></span></p>
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
//                 <th>Strength</th>
//                 <th>Quantity</th>
//                 <th>Unit Price</th>
//                 <th>Discount</th>
//                 <th>Total</th>
//                 <th><button onClick={handleDeleteAllItems} className="btn btn-danger">DeleteAll</button></th>
//               </tr>
//               <tr>
//                 <td>
//                   <select name='product' onChange={handleSetItem} className="form-select">
//                     <option>Select Product</option>
//                     {products?.map((data, i) => (
//                       <>
//                         <option value={JSON.stringify(data)} key={data.id}>{data.name}</option>
                      
//                       </>
//                     ))}
//                   </select>
//                 </td>
//                 <td><input value={item.strength} name="strength" type="text" className="w-100 form-control" placeholder="" /></td>
//                 <td><input value={item.qty} name="qty" onChange={handleSetItem} type="text" className=" p-1  w-100 form-control" placeholder="Qty" /></td>
//                 <td><input value={item.price} name="price" type="text" className="w-100 form-control" placeholder="Price" /></td>
//                 <td><input value={item.discount} name="discount" onChange={handleSetItem} type="text" className="w-100 form-control" placeholder="Discount" /></td>
//                 <td>{item.subtotal}</td>
//                 <td>
//                   <button onClick={handleSetAllItems} className="btn btn-info">Add</button>
//                 </td>
//               </tr>
//             </thead>
//             <tbody id="data_append">
//               {
//                 items?.map((data, i) => (
//                   <tr key={data.item_id || i}>
//                     <td>{data.name}</td>
//                     <td>{data.strength}</td>
//                     <td>{data.qty}</td>
//                     <td>{data.price}</td>
//                     <td>{data.discount}</td>
//                     <td>{data.subtotal}</td>
//                     <td> <button onClick={()=>handleitemdelete(data.item_id)} className="btn btn-warning">Remove</button></td>
//                   </tr>
//                 ))

//               }
//             </tbody>
//             <tfoot>




//               <tr>
//                 <td colSpan="4" className="text-end fw-bold">Discount</td>
//                 <td className="fw-bold">{summaryCount.discount}</td>
//                 <td></td>
//               </tr>
//               <tr>
//                 <td colSpan="4" className="text-end fw-bold">Tax</td>
//                 <td className="fw-bold">${summaryCount.tax}</td>
//                 <td></td>
//               </tr>
//               <tr>
//                 <td colSpan="4" className="text-end fw-bold ">Subtotal</td>
//                 <td className="fw-bold">${summaryCount.subtotal}</td>
//                 <td></td>
//               </tr>
//               <tr>
//                 <td colSpan="4" className="text-end fw-bold">Total</td>
//                 <td className="fw-bold">${summaryCount.total}</td>
//                 <td></td>
//               </tr>
//             </tfoot>
//           </table>

//           {/* Footer Actions */}
//           <div className="d-flex justify-content-between mt-4">
//             {/* <button className="btn btn-danger" onClick={handleDeleteAllItems}>Clear All</button> */}

//             <button onClick={handleProcess} className="btn btn-success">Process</button>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Purchase;
