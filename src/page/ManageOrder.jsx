import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const ManageOrder = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = () => {
    axios
      .get("http://localhost/class_practice/project/api/orders")
      .then((res) => {
        console.log(res.data);
        setOrders(res.data.orders);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      axios
        .get(`http://localhost/class_practice/project/api/order/delete/${id}`)
        .then((res) => {
          console.log(res);
          fetchOrders();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="container mt-5">
      <NavLink to="/createorder" className="btn btn-primary mb-3">
        Add New Order
      </NavLink>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Total</th>
            <th>Discount</th>
            <th>Tax</th>
            <th>Warehouse</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, i) => (
            <tr key={i}>
              <td>{order.id}</td>
              <td>{order.customer_name}</td>
              <td>${order.total_order}</td>
              <td>${order.discount}</td>
              <td>${order.vat}</td>
              <td>{order.warehouse_name}</td>
              <td>
                <NavLink to={`view/${order.id}`} className="btn btn-success me-2">
                  View
                </NavLink>
                <NavLink to={`edit/${order.id}`} className="btn btn-warning me-2">
                  Edit
                </NavLink>
                <button onClick={() => handleDelete(order.id)} className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrder;
