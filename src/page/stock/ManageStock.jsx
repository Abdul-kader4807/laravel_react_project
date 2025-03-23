
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react"
import axios from "axios";
import { NavLink } from "react-router-dom";


const ManageStock = () => {

const [stocks,setStock]=useState([]);

const FetchStock=()=>{
  axios.get("http://localhost/laraval/laravel_project/public/api/stocks")

   .then((res)=>{
  console.log(res.data);
  setStock(res.data.stocks);
  })
   .catch((error)=>{
  console.log(error);
    })
  
  }

 useEffect(()=>{
  FetchStock();
//   console.log(orders)
  },[]);


  const handelDelete = (id) => {


    confirm("are you sure");
    axios
      .get("http://localhost/laraval/laravel_project/public/api/order/delete/" + id)
      .then((res) => {
        console.log(res);
        FetchStock();
      })
      .catch((err) => {
        console.log(err);
      });
  };



                    

 return(
    <>


<div className="container mt-5 p-5">
    <table className="table">
    <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">product Name </th>
      <th scope="col">warehouse Name </th>
      {/* <th scope="col">price</th> */}
      <th scope="col">qty</th>
      <th scope="col">remark</th>
      {/* <th scope="col">Action</th> */}
    </tr>
  </thead>
  <tbody>
    {
    stocks?.map((data,i)=>{
      return(
<tr key={i}>
      <th scope="row">{data.id}</th>
      {/* <td>{data.product_id}</td>
      <td>{data.warehouse_id}</td> */}
       <td>{data.product ? data.product.name : "N/A"}</td>
       <td>{data.warehouse ? data.warehouse.name : "N/A"}</td>
      {/* <td>{data.price}</td> */}
      <td>{data.qty}</td>
      <td>{data.remark}</td>
      
      
        {/* <td className="btn-group">
                  
                  <NavLink to={`show/${data.id}`} className="btn btn-success">
                    View
                  </NavLink>
                  <NavLink
                    onClick={() => handelDelete(data.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </NavLink>
                </td> */}
        </tr>
      )})}




    
  </tbody>
</table>
</div>
  </>
  )
}

export default ManageStock



