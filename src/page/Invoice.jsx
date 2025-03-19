import React from "react";

const Invoice = () => {
  return (
    <>
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive table-card">
                    <table className="table table-hover table-nowrap align-middle mb-0">
                      <thead className="bg-light">
                        <tr className="text-muted text-uppercase">
                          <th style={{ width: 50 }}>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="checkAll"
                                defaultValue="option"
                              />
                            </div>
                          </th>
                          <th scope="col">Invoice ID</th>
                          <th scope="col">Client</th>
                          <th scope="col" style={{ width: "20%" }}>
                            Email
                          </th>
                          <th scope="col">Country</th>
                          <th scope="col">Date</th>
                          <th scope="col">Billed</th>
                          <th scope="col" style={{ width: "8%" }}>
                            Status
                          </th>
                          <th scope="col" style={{ width: "12%" }}>
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="check1"
                                defaultValue="option"
                              />
                            </div>
                          </td>
                          <td>
                            <p className="fw-medium mb-0">Lec-2152</p>
                          </td>
                          <td>
                            <img
                              src="assets/images/users/avatar-1.jpg"
                              alt
                              className="avatar-xs rounded-circle me-2"
                            />
                            <a
                              href="#javascript: void(0);"
                              className="text-body align-middle fw-medium"
                            >
                              Donald Risher
                            </a>
                          </td>
                          <td>morbi.quis@protonmail.org</td>
                          <td>USA</td>
                          <td>20 Sep, 2022</td>
                          <td>$240.00</td>
                          <td>
                            <span className="badge badge-soft-success p-2">
                              Paid
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                className="btn btn-light btn-sm dropdown"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="mdi mdi-dots-vertical align-middle font-size-16" />
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <button
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-eye-outline font-size-16 align-middle me-2 text-muted" />
                                    View
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-pencil-outline font-size-16 align-middle me-2 text-muted" />
                                    Edit
                                  </button>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-file-download-outline font-size-16 align-middle me-2 text-muted" />
                                    Download
                                  </a>
                                </li>
                                <li className="dropdown-divider" />
                                <li>
                                  <a
                                    className="dropdown-item remove-item-btn"
                                    href="#"
                                  >
                                    <i className="mdi mdi-trash-can-outline font-size-16 align-middle me-2 text-muted" />
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="check2"
                                defaultValue="option"
                              />
                            </div>
                          </td>
                          <td>
                            <p className="fw-medium mb-0">Lec-2153</p>
                          </td>
                          <td>
                            <img
                              src="assets/images/users/avatar-2.jpg"
                              alt
                              className="avatar-xs rounded-circle me-2"
                            />
                            <a
                              href="#javascript: void(0);"
                              className="text-body align-middle fw-medium"
                            >
                              Brody Holman
                            </a>
                          </td>
                          <td>metus@protonmail.org</td>
                          <td>USA</td>
                          <td>12 Arl, 2022</td>
                          <td>$390.00</td>
                          <td>
                            <span className="badge badge-soft-warning p-2">
                              Unpaid
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                className="btn btn-light btn-sm dropdown"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="mdi mdi-dots-vertical align-middle font-size-16" />
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <button
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-eye-outline font-size-16 align-middle me-2 text-muted" />
                                    View
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-pencil-outline font-size-16 align-middle me-2 text-muted" />
                                    Edit
                                  </button>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-file-download-outline font-size-16 align-middle me-2 text-muted" />
                                    Download
                                  </a>
                                </li>
                                <li className="dropdown-divider" />
                                <li>
                                  <a
                                    className="dropdown-item remove-item-btn"
                                    href="#"
                                  >
                                    <i className="mdi mdi-trash-can-outline font-size-16 align-middle me-2 text-muted" />
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="check3"
                                defaultValue="option"
                              />
                            </div>
                          </td>
                          <td>
                            <p className="fw-medium mb-0">Lec-2154</p>
                          </td>
                          <td>
                            <img
                              src="assets/images/users/avatar-3.jpg"
                              alt
                              className="avatar-xs rounded-circle me-2"
                            />
                            <a
                              href="#javascript: void(0);"
                              className="text-body align-middle fw-medium"
                            >
                              Jolie Hood
                            </a>
                          </td>
                          <td>morbi.quis@protonmail.org</td>
                          <td>USA</td>
                          <td>28 Mar, 2022</td>
                          <td>$440.00</td>
                          <td>
                            <span className="badge badge-soft-success p-2">
                              Paid
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                className="btn btn-light btn-sm dropdown"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="mdi mdi-dots-vertical align-middle font-size-16" />
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <button
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-eye-outline font-size-16 align-middle me-2 text-muted" />
                                    View
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-pencil-outline font-size-16 align-middle me-2 text-muted" />
                                    Edit
                                  </button>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-file-download-outline font-size-16 align-middle me-2 text-muted" />
                                    Download
                                  </a>
                                </li>
                                <li className="dropdown-divider" />
                                <li>
                                  <a
                                    className="dropdown-item remove-item-btn"
                                    href="#"
                                  >
                                    <i className="mdi mdi-trash-can-outline font-size-16 align-middle me-2 text-muted" />
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="check4"
                                defaultValue="option"
                              />
                            </div>
                          </td>
                          <td>
                            <p className="fw-medium mb-0">Lec-2155</p>
                          </td>
                          <td>
                            <img
                              src="assets/images/users/avatar-4.jpg"
                              alt
                              className="avatar-xs rounded-circle me-2"
                            />
                            <a
                              href="#javascript: void(0);"
                              className="text-body align-middle fw-medium"
                            >
                              Buckminster Wong
                            </a>
                          </td>
                          <td>morbi.quis@protonmail.org</td>
                          <td>USA</td>
                          <td>23 Aug, 2022</td>
                          <td>$520.00</td>
                          <td>
                            <span className="badge badge-soft-success p-2">
                              Paid
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                className="btn btn-light btn-sm dropdown"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="mdi mdi-dots-vertical align-middle font-size-16" />
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <button
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-eye-outline font-size-16 align-middle me-2 text-muted" />
                                    View
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-pencil-outline font-size-16 align-middle me-2 text-muted" />
                                    Edit
                                  </button>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-file-download-outline font-size-16 align-middle me-2 text-muted" />
                                    Download
                                  </a>
                                </li>
                                <li className="dropdown-divider" />
                                <li>
                                  <a
                                    className="dropdown-item remove-item-btn"
                                    href="#"
                                  >
                                    <i className="mdi mdi-trash-can-outline font-size-16 align-middle me-2 text-muted" />
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="check5"
                                defaultValue="option"
                              />
                            </div>
                          </td>
                          <td>
                            <p className="fw-medium mb-0">Lec-2156</p>
                          </td>
                          <td>
                            <img
                              src="assets/images/users/avatar-5.jpg"
                              alt
                              className="avatar-xs rounded-circle me-2"
                            />
                            <a
                              href="#javascript: void(0);"
                              className="text-body align-middle fw-medium"
                            >
                              Howard Lyons
                            </a>
                          </td>
                          <td>neque.sed.dictum@icloud.org</td>
                          <td>USA</td>
                          <td>18 Sep, 2022</td>
                          <td>$480.00</td>
                          <td>
                            <span className="badge badge-soft-info p-2">
                              Refund
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                className="btn btn-light btn-sm dropdown"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="mdi mdi-dots-vertical align-middle font-size-16" />
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <button
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-eye-outline font-size-16 align-middle me-2 text-muted" />
                                    View
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-pencil-outline font-size-16 align-middle me-2 text-muted" />
                                    Edit
                                  </button>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-file-download-outline font-size-16 align-middle me-2 text-muted" />
                                    Download
                                  </a>
                                </li>
                                <li className="dropdown-divider" />
                                <li>
                                  <a
                                    className="dropdown-item remove-item-btn"
                                    href="#"
                                  >
                                    <i className="mdi mdi-trash-can-outline font-size-16 align-middle me-2 text-muted" />
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="check6"
                                defaultValue="option"
                              />
                            </div>
                          </td>
                          <td>
                            <p className="fw-medium mb-0">Lec-2157</p>
                          </td>
                          <td>
                            <img
                              src="assets/images/users/avatar-6.jpg"
                              alt
                              className="avatar-xs rounded-circle me-2"
                            />
                            <a
                              href="#javascript: void(0);"
                              className="text-body align-middle fw-medium"
                            >
                              Howard Oneal
                            </a>
                          </td>
                          <td>metus@protonmail.org</td>
                          <td>USA</td>
                          <td>12 Feb, 2022</td>
                          <td>$550.00</td>
                          <td>
                            <span className="badge badge-soft-success p-2">
                              Paid
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                className="btn btn-light btn-sm dropdown"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="mdi mdi-dots-vertical align-middle font-size-16" />
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <button
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-eye-outline font-size-16 align-middle me-2 text-muted" />
                                    View
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-pencil-outline font-size-16 align-middle me-2 text-muted" />
                                    Edit
                                  </button>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-file-download-outline font-size-16 align-middle me-2 text-muted" />
                                    Download
                                  </a>
                                </li>
                                <li className="dropdown-divider" />
                                <li>
                                  <a
                                    className="dropdown-item remove-item-btn"
                                    href="#"
                                  >
                                    <i className="mdi mdi-trash-can-outline font-size-16 align-middle me-2 text-muted" />
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="check7"
                                defaultValue="option"
                              />
                            </div>
                          </td>
                          <td>
                            <p className="fw-medium mb-0">Lec-2158</p>
                          </td>
                          <td>
                            <img
                              src="assets/images/users/avatar-7.jpg"
                              alt
                              className="avatar-xs rounded-circle me-2"
                            />
                            <a
                              href="#javascript: void(0);"
                              className="text-body align-middle fw-medium"
                            >
                              Jena Hall
                            </a>
                          </td>
                          <td>morbi.quis@protonmail.org</td>
                          <td>USA</td>
                          <td>30 Nov, 2022</td>
                          <td>$170.00</td>
                          <td>
                            <span className="badge badge-soft-danger p-2">
                              Cancel
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                className="btn btn-light btn-sm dropdown"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="mdi mdi-dots-vertical align-middle font-size-16" />
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <button
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-eye-outline font-size-16 align-middle me-2 text-muted" />
                                    View
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-pencil-outline font-size-16 align-middle me-2 text-muted" />
                                    Edit
                                  </button>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-file-download-outline font-size-16 align-middle me-2 text-muted" />
                                    Download
                                  </a>
                                </li>
                                <li className="dropdown-divider" />
                                <li>
                                  <a
                                    className="dropdown-item remove-item-btn"
                                    href="#"
                                  >
                                    <i className="mdi mdi-trash-can-outline font-size-16 align-middle me-2 text-muted" />
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="check8"
                                defaultValue="option"
                              />
                            </div>
                          </td>
                          <td>
                            <p className="fw-medium mb-0">Lec-2159</p>
                          </td>
                          <td>
                            <img
                              src="assets/images/users/avatar-8.jpg"
                              alt
                              className="avatar-xs rounded-circle me-2"
                            />
                            <a
                              href="#javascript: void(0);"
                              className="text-body align-middle fw-medium"
                            >
                              Paki Edwards
                            </a>
                          </td>
                          <td>dictum.phasellus.in@hotmail.org</td>
                          <td>USA</td>
                          <td>23 Sep, 2022</td>
                          <td>$720.00</td>
                          <td>
                            <span className="badge badge-soft-success p-2">
                              Paid
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                className="btn btn-light btn-sm dropdown"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="mdi mdi-dots-vertical align-middle font-size-16" />
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <button
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-eye-outline font-size-16 align-middle me-2 text-muted" />
                                    View
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-pencil-outline font-size-16 align-middle me-2 text-muted" />
                                    Edit
                                  </button>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-file-download-outline font-size-16 align-middle me-2 text-muted" />
                                    Download
                                  </a>
                                </li>
                                <li className="dropdown-divider" />
                                <li>
                                  <a
                                    className="dropdown-item remove-item-btn"
                                    href="#"
                                  >
                                    <i className="mdi mdi-trash-can-outline font-size-16 align-middle me-2 text-muted" />
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="check2"
                                defaultValue="option"
                              />
                            </div>
                          </td>
                          <td>
                            <p className="fw-medium mb-0">Lec-2153</p>
                          </td>
                          <td>
                            <img
                              src="assets/images/users/avatar-2.jpg"
                              alt
                              className="avatar-xs rounded-circle me-2"
                            />
                            <a
                              href="#javascript: void(0);"
                              className="text-body align-middle fw-medium"
                            >
                              Brody Holman
                            </a>
                          </td>
                          <td>metus@protonmail.org</td>
                          <td>USA</td>
                          <td>12 Arl, 2022</td>
                          <td>$390.00</td>
                          <td>
                            <span className="badge badge-soft-warning p-2">
                              Unpaid
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                className="btn btn-light btn-sm dropdown"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="mdi mdi-dots-vertical align-middle font-size-16" />
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <button
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-eye-outline font-size-16 align-middle me-2 text-muted" />
                                    View
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-pencil-outline font-size-16 align-middle me-2 text-muted" />
                                    Edit
                                  </button>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-file-download-outline font-size-16 align-middle me-2 text-muted" />
                                    Download
                                  </a>
                                </li>
                                <li className="dropdown-divider" />
                                <li>
                                  <a
                                    className="dropdown-item remove-item-btn"
                                    href="#"
                                  >
                                    <i className="mdi mdi-trash-can-outline font-size-16 align-middle me-2 text-muted" />
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="check3"
                                defaultValue="option"
                              />
                            </div>
                          </td>
                          <td>
                            <p className="fw-medium mb-0">Lec-2154</p>
                          </td>
                          <td>
                            <img
                              src="assets/images/users/avatar-3.jpg"
                              alt
                              className="avatar-xs rounded-circle me-2"
                            />
                            <a
                              href="#javascript: void(0);"
                              className="text-body align-middle fw-medium"
                            >
                              Jolie Hood
                            </a>
                          </td>
                          <td>morbi.quis@protonmail.org</td>
                          <td>USA</td>
                          <td>28 Mar, 2022</td>
                          <td>$440.00</td>
                          <td>
                            <span className="badge badge-soft-success p-2">
                              Paid
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                className="btn btn-light btn-sm dropdown"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="mdi mdi-dots-vertical align-middle font-size-16" />
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <button
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-eye-outline font-size-16 align-middle me-2 text-muted" />
                                    View
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-pencil-outline font-size-16 align-middle me-2 text-muted" />
                                    Edit
                                  </button>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-file-download-outline font-size-16 align-middle me-2 text-muted" />
                                    Download
                                  </a>
                                </li>
                                <li className="dropdown-divider" />
                                <li>
                                  <a
                                    className="dropdown-item remove-item-btn"
                                    href="#"
                                  >
                                    <i className="mdi mdi-trash-can-outline font-size-16 align-middle me-2 text-muted" />
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="check4"
                                defaultValue="option"
                              />
                            </div>
                          </td>
                          <td>
                            <p className="fw-medium mb-0">Lec-2155</p>
                          </td>
                          <td>
                            <img
                              src="assets/images/users/avatar-4.jpg"
                              alt
                              className="avatar-xs rounded-circle me-2"
                            />
                            <a
                              href="#javascript: void(0);"
                              className="text-body align-middle fw-medium"
                            >
                              Buckminster Wong
                            </a>
                          </td>
                          <td>morbi.quis@protonmail.org</td>
                          <td>USA</td>
                          <td>23 Aug, 2022</td>
                          <td>$520.00</td>
                          <td>
                            <span className="badge badge-soft-success p-2">
                              Paid
                            </span>
                          </td>
                          <td>
                            <div className="dropdown">
                              <button
                                className="btn btn-light btn-sm dropdown"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="mdi mdi-dots-vertical align-middle font-size-16" />
                              </button>
                              <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                  <button
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-eye-outline font-size-16 align-middle me-2 text-muted" />
                                    View
                                  </button>
                                </li>
                                <li>
                                  <button
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-pencil-outline font-size-16 align-middle me-2 text-muted" />
                                    Edit
                                  </button>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                  >
                                    <i className="mdi mdi-file-download-outline font-size-16 align-middle me-2 text-muted" />
                                    Download
                                  </a>
                                </li>
                                <li className="dropdown-divider" />
                                <li>
                                  <a
                                    className="dropdown-item remove-item-btn"
                                    href="#"
                                  >
                                    <i className="mdi mdi-trash-can-outline font-size-16 align-middle me-2 text-muted" />
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                      {/* end tbody */}
                    </table>
                    {/* end table */}
                  </div>
                  {/* end table responsive */}
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center mb-4 gy-3">
            <div className="col-md-5">
              <p className="mb-0 text-muted">
                Showing <b>1</b> to <b>5</b> of <b>10</b> results
              </p>
            </div>
            <div className="col-sm-auto ms-auto">
              <nav aria-label="...">
                <ul className="pagination mb-0">
                  <li className="page-item disabled">
                    <span className="page-link">Previous</span>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item" aria-current="page">
                    <span className="page-link">2</span>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>{" "}
        {/* container-fluid */}
      </div>
    </>
  );
};

export default Invoice;
