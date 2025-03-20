
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react"
import axios from "axios";
import { NavLink } from "react-router-dom";


const ManagePurchase = () => {

const [purchases,setPurchase]=useState([]);

const FetchPurchase=()=>{
  axios.get("http://localhost/laraval/laravel_project/public/api/purchase")

   .then((res)=>{
  console.log(res.data);
  setPurchase(res.data.purchase);
  })
   .catch((error)=>{
  console.log(error);
    })
  
  }

 useEffect(()=>{
    FetchPurchase();
//   console.log(purchases)
  },[]);


  const handelDelete = (id) => {


    confirm("are you sure");
    axios
      .get("http://localhost/laraval/laravel_project/public/api/purchase/delete/" + id)
      .then((res) => {
        console.log(res);
        FetchPurchase();
      })
      .catch((err) => {
        console.log(err);
      });
  };



                    

 return(
    <>


<div className="container mt-5 p-5">
<NavLink to="/purchase" className={"btn btn-primary"}>Add</NavLink>
    <table className="table">
    <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Supplier Name</th>
      {/* <th scope="col">shipping_address</th> */}
      <th scope="col">Total_purchase</th>
      <th scope="col">Paid_amount</th>
      <th scope="col">Discount</th>
      <th scope="col">Purchase_date</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
    purchases?.map((data,i)=>{
      return(
<tr key={i}>
      <th scope="row">{data.id}</th>
      <td>{data.supplier_id}</td>
      {/* <td>{data.shipping_address}</td> */}
      <td>{data.total_purchase}</td>
      <td>{data.paid_amount}</td>
      <td>{data.discount}</td>
      <td>{data.purchase_date}</td>
      
      
        <td className="btn-group">
                  <NavLink to={`update/${data.id}`} className="btn btn-primary">
                    Edit
                  </NavLink>
                  <NavLink to={`show/${data.id}`} className="btn btn-success">
                    View
                  </NavLink>
                  <NavLink
                    onClick={() => handelDelete(data.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </NavLink>
                </td>
        </tr>
      )})}




    
  </tbody>
</table>
</div>
  </>
  )
}

export default ManagePurchase



