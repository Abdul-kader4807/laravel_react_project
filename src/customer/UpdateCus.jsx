
import axios from "axios";
import  { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateCus = () => {

  const { id } = useParams();

  const navigation = useNavigate();
  const [customers, setCustomer] = useState({
    id: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    photo: ""
  });

  const FetchCustomer = () => {
    axios
      .get("http://localhost/class_practice/project/api/customer/find/" + id)
      .then((res) => {
          console.log(res.data.customers);
        setCustomer(res.data.customer);
      });
  };

  useEffect(() => {
    FetchCustomer();
     console.log(customers);
    
  }, []);

  const handleChange = (c) => {
    const { name, value } = c.target;
     console.log(c);
    setCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(customers);
  }, [customers])


const handleFileChange =(c)=>{
  const file =c.target.files[0];
  setCustomer((prev)=>({
    ...prev,
    photo:file,
  }));
};

  const handleSubmit = (c) => {
    c.preventDefault();

const FormData = new FormData();
FormData.append('id',customers.id);
FormData.append('name',customers.name);
FormData.append('phone',customers.phone);
FormData.append('email',customers.email);
FormData.append('address',customers.address);
FormData.append('photo',customers.photo);

    
    axios
      .post(
        "http://localhost/class_practice/project/api/customer/update",
        FormData,
        {
headers:{
  'Content-Type':'multipart/form-data'
}
        }
      )
      .then((res) => {
        console.log(res);
        setCustomer({
          name: "",
          phone: "",
          email: "",
          address: "",
          photo: ""
        });
        navigation("/");
      })
      .catch((err) => {
        console.log(err);
      });

    }
  return (
    <>
    <form onSubmit={handleSubmit} className="m-5">
        <label htmlFor="name">Name</label> <br />
        <input onChange={handleChange} value={customers.name} type="text" name="name" placeholder="name" />
        <br />
        <label htmlFor="phone">Phone</label> <br />
        <input value={customers.phone} onChange={handleChange} type="text" name="phone" placeholder="phone"/>
        <br />
        <label htmlFor="email">Email</label> <br />
        <input value={customers.email} onChange={handleChange} type="text" name="email" placeholder="email" />
        <br />

        <label htmlFor="address">Address</label> <br />
        <input value={customers.address} onChange={handleChange}  type="text" name="address" placeholder="address" />
        <br />
        <label htmlFor="photo">Photo</label> <br />
        <input onChange={handleFileChange}  type="file" name="photo" placeholder="photo" />
        {customers.photo && <img src={URL.createObjectURL(customers.photo)} alt="customer" />}
        <br />

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </>
  )  
}

export default UpdateCus











