
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useEffect, useState } from "react"
// import axios from "axios";
// import { NavLink } from "react-router-dom";


// const ManageOrder = () => {

// const [orders,setOrder]=useState([]);
// const FetchOrder=()=>{
//   axios.get("http://localhost/class_practice/project/api/order/",orders)

//    .then((res)=>{
//   console.log(res.data);
//   setOrder(res.data.order);
//   })
//    .catch((error)=>{
//   console.log(error);
//     })
  
//   }


//  useEffect(()=>{
//   FetchOrder();
//   console.log(orders)
//   },[]);

//   const handelDelete = (id) => {


//     confirm("are you sure");
//     axios
//       .get("http://localhost/class_practice/project/api/order/delete/" + id)
//       .then((res) => {
//         console.log(res);
//         FetchOrder();
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };



                    

//  return(
//     <>


// <div className="container mt-5">
// <NavLink to="/createorder" className={"btn btn-primary"}>Add</NavLink>
//     <table className="table">
//     <thead>
//     <tr>
//       <th scope="col">Id</th>
//       <th scope="col">customer name</th>
//       <th scope="col">shipping_address</th>
//       <th scope="col">order_total</th>
//       <th scope="col">discount</th>
//       <th scope="col">paid_amount"</th>
//       <th scope="col">order_date</th>
//       <th scope="col">delivery_date</th>
//       <th scope="col">Action</th>
//     </tr>
//   </thead>
//   <tbody>
//     {orders?.map((data,i)=>{
//       return(
// <tr key={i}>
//       <th scope="row">{data.id}</th>
//       <td>{data.customer_id}</td>
//       <td>{data.shipping_address}</td>
//       <td>{data.order_total}</td>
//       <td>{data.discount}</td>
//       <td>{data.paid_amount}</td>
//       <td>{data.order_date}</td>
//       <td>{data.delivery_date}</td>
      
//         <td>
//                   <NavLink to={`update/${data.id}`} className="btn btn-primary">
//                     Edit
//                   </NavLink>
//                   <NavLink to={`show/${data.id}`} className="btn btn-success">
//                     View
//                   </NavLink>
//                   <NavLink
//                     onClick={() => handelDelete(data.id)}
//                     className="btn btn-danger"
//                   >
//                     Delete
//                   </NavLink>
//                 </td>
//         </tr>
//       )})}




    
//   </tbody>
// </table>
// </div>
//   </>
//   )
// }

// export default ManageOrder



