
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateCus = () => {


const navigation = useNavigate();
const [customers, setCustomer] = useState({
    name:"",
    phone: "",
    email:"",
    photo:"",
    address:""
})

  const handleChange=(c)=>{
    const{name,value,type,files}=c.target
     console.log(c);
  

     
    if (type == "file") {
      setCustomer((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setCustomer((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }
     useEffect(() => {
    //   //console.log(customers);
    }, [customers]);

    const handleSubmit = (c) => {
      c.preventDefault();

      const cusFormData = new FormData();
      cusFormData.append("name", customers.name);
      cusFormData.append("phone", customers.phone);
      cusFormData.append("email", customers.email);
      cusFormData.append("photo", customers.photo);
      cusFormData.append("address", customers.address);

      axios.post("http://localhost/class_practice/project/api/customer/save", cusFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((res) => {
          console.log(res);
          setCustomer({
            name: "",
            phone: "",
            email: "",
            photo: "",
            address: "",
          });

          navigation("/");
        })
        .catch((err) => {
          console.log(err);
        });
     // console.log(customers);
    };

    return (
      <>
        <form onSubmit={handleSubmit} className="m-5">
          <label htmlFor="name">Name</label> <br />
          <input
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="name"
          />
          <br />
          <label htmlFor="phone">Phone</label> <br />
          <input
            onChange={handleChange}
            type="text"
            name="phone"
            placeholder="phone"
          />
          <br />
          <label htmlFor="email">Email</label> <br />
          <input
            onChange={handleChange}
            type="text"
            name="email"
            placeholder="email"
          />
          <br />
          <label htmlFor="photo">photo</label> <br />
          <input onChange={handleChange} type="file" name="photo" />
          <br />
          <label htmlFor="address">Address</label> <br />
          <input
            onChange={handleChange}
            type="text"
            name="address"
            placeholder="address"
          />
          <br />
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </>
    );
  };


export default CreateCus;
