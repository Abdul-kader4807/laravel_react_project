

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ShowPurchase = () => {
  const [purchase, setPurchase] = useState(null);
  const [purchaseDetails, setPurchaseDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost/laraval/laravel_project/public/api/invoicebyshow/${id}`)
      .then((response) => {
        console.log("API Response:", response.data); 
        setPurchase(response.data.purchase);
        setPurchaseDetails(response.data.purchase?.purchase_details || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const calculateTotal = () => {
    if (!purchaseDetails.length) return { total: 0, totalDiscount: 0, tax: 0, grandTotal: 0 };
    
    let total = purchaseDetails.reduce((acc, item) => acc + (item.price * item.qty), 0);
    let totalDiscount = purchaseDetails.reduce((acc, item) => acc + item.discount, 0);
    let tax = total * 0.05;
    let grandTotal = total + tax - totalDiscount;
    
    return { total, totalDiscount, tax, grandTotal };
  };

  const { total, totalDiscount, tax, grandTotal } = calculateTotal();

  const printInvoice = () => {
    window.print();
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-danger">Error: {error}</p>;

  return (
    <div className="container my-5">
      <div className="card shadow">
        <div className="card-header bg-success text-white text-center">
          <h1>Invoice</h1>
        </div>
        <div className="card-body">
          <div id="invoiceContent">
            <div className="row mb-4">
              <div className="col-md-6">
                <h5>Supplier Details</h5>
                <p>Name: {purchase?.supplier?.name || "N/A"}</p>
                <p>Phone: {purchase?.supplier?.phone || "N/A"}</p>
                <p>Email: {purchase?.supplier?.email || "N/A"}</p>
                <p>Address: {purchase?.supplier?.address || "N/A"}</p>
              </div>

              <div className="col-md-6 text-end">
                <h5>Invoice Details</h5>
                <p>Invoice No: #{purchase?.id}</p>
                <p>Date: {new Date(purchase?.purchase_date).toLocaleDateString()}</p>
              </div>
            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Discount</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {purchaseDetails.map((item, index) => (
                  <tr key={index}>
                    <td>{item.product?.name || "N/A"}</td>
                    <td>{item.qty}</td>
                    <td>{item.price.toFixed(2)}</td>
                    <td>{item.discount.toFixed(2)}</td>
                    <td>{(item.price * item.qty - item.discount).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="4" className="text-end fw-bold">Total</td>
                  <td>{total.toFixed(2)}</td>
                </tr>
                <tr>
                  <td colSpan="4" className="text-end fw-bold">Tax (5%)</td>
                  <td>{tax.toFixed(2)}</td>
                </tr>
                <tr>
                  <td colSpan="4" className="text-end fw-bold">Total Discount</td>
                  <td>{totalDiscount.toFixed(2)}</td>
                </tr>
                <tr>
                  <td colSpan="4" className="text-end fw-bold">Grand Total</td>
                  <td>{grandTotal.toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="d-flex justify-content-between mt-4">
            <button onClick={printInvoice} className="btn btn-primary print-btn">Print Invoice</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPurchase;
