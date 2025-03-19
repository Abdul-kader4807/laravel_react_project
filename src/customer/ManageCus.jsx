
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react"
import axios from "axios";
import { NavLink } from "react-router-dom";


const ManageCus = () => {

const [customers,setCustomer]=useState([]);
const FetchCustomer=()=>{
  axios.get("http://localhost/class_practice/project/api/customer/",customers)

   .then((res)=>{
  console.log(res.data);
  setCustomer(res.data.customer);
  })
   .catch((error)=>{
  console.log(error);
    })
  
  }


 useEffect(()=>{
  FetchCustomer();
  console.log(customers)
  },[]);

  const handelDelete = (id) => {


    confirm("are you sure");
    axios
      .get("http://localhost/class_practice/project/api/customer/delete/" + id)
      .then((res) => {
        console.log(res);
        FetchCustomer();
      })
      .catch((err) => {
        console.log(err);
      });
  };



                    

 return(
    <>


<div className="container mt-5">
<NavLink to="/createcustomer" className={"btn btn-primary"}>Add</NavLink>
    <table className="table">
    <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Photo</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {customers?.map((data,i)=>{
      return(
<tr key={i}>
      <th scope="row">{data.id}</th>
      <td>{data.name}</td>
      <td>{data.phone}</td>
      <td>{data.email}</td>
      <td>{data.address}</td>
      <td>{data.photo &&(<img src={"http://localhost/class_practice/project/img/" +
              data.photo} alt="" width={50}/>)}
        </td>
        <td>
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

export default ManageCus



