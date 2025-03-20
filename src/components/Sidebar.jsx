import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      {/* ========== Left Sidebar Start ========== */}
      <div className="vertical-menu">
        {/* LOGO */}
        <div className="navbar-brand-box">
          <a href="index.html" className="logo logo-dark">
            <span className="logo-sm">
              <img
                src="assets/images/logo-icon.png"
                alt="logo-sm-dark"
                height={24}
              />
            </span>
            <span className="logo-lg">
              <img
                src="assets/images/logo-icon.png"
                alt="logo-dark"
                height={22}
              />
            </span>
          </a>
          <a href="index.html" className="logo logo-light">
            <span className="logo-sm">
              <img
                src="assets/images/logo-sm-light.png"
                alt="logo-sm-light"
                height={24}
              />
            </span>
            <span className="logo-lg">
              <img
                src="assets/images/pharmacy.jpg"
                alt="logo-light"
                height={45}
              />
            </span>
          </a>
        </div>
        <button
          type="button"
          className="btn btn-sm px-3 font-size-24 header-item waves-effect vertical-menu-btn"
          id="vertical-menu-btn"
        >
          <i className="ri-menu-2-line align-middle" />
        </button>
        <div data-simplebar className="vertical-scroll">
          {/*- Sidemenu */}
          <div id="sidebar-menu">
            <div className="dropdown mx-3 sidebar-user user-dropdown select-dropdown">
              <button
                type="button"
                className="btn btn-light w-100 waves-effect waves-light border-0"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="d-flex align-items-center">
                  <div className="flex-shrink-0">
                    <div className="avatar-xs rounded-circle flex-shrink-0">
                      <div className="avatar-title border bg-light text-primary rounded-circle text-uppercase user-sort-name">
                        R
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-2 text-start">
                    <h6 className="mb-1 fw-medium user-name-text">
                      {" "}
                      Reporting{" "}
                    </h6>
                    <p className="font-size-13 text-muted user-name-sub-text mb-0">
                      {" "}
                      Team Reporting{" "}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-end">
                    <i className="mdi mdi-chevron-down font-size-16" />
                  </div>
                </span>
              </button>
              <div className="dropdown-menu dropdown-menu-end w-100">
                {/* item*/}
                <a
                  className="dropdown-item d-flex align-items-center px-3"
                  href="#"
                >
                  <div className="flex-shrink-0 me-2">
                    <div className="avatar-xs rounded-circle flex-shrink-0">
                      <div className="avatar-title border rounded-circle text-uppercase dropdown-sort-name">
                        C
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="mb-0 dropdown-name">CRM</h6>
                    <p className="text-muted font-size-13 mb-0 dropdown-sub-desc">
                      Designer Team
                    </p>
                  </div>
                </a>
                <a
                  className="dropdown-item d-flex align-items-center px-3"
                  href="#"
                >
                  <div className="flex-shrink-0 me-2">
                    <div className="avatar-xs rounded-circle flex-shrink-0">
                      <div className="avatar-title border rounded-circle text-uppercase dropdown-sort-name">
                        A
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="mb-0 dropdown-name">Application Design</h6>
                    <p className="text-muted font-size-13 mb-0 dropdown-sub-desc">
                      Flutter Devs
                    </p>
                  </div>
                </a>
                <a
                  className="dropdown-item d-flex align-items-center px-3"
                  href="#"
                >
                  <div className="flex-shrink-0 me-2">
                    <div className="avatar-xs rounded-circle flex-shrink-0">
                      <div className="avatar-title border rounded-circle text-uppercase dropdown-sort-name">
                        E
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="mb-0 dropdown-name">Ecommerce</h6>
                    <p className="text-muted font-size-13 mb-0 dropdown-sub-desc">
                      Developer Team
                    </p>
                  </div>
                </a>
                <a
                  className="dropdown-item d-flex align-items-center px-3"
                  href="#"
                >
                  <div className="flex-shrink-0 me-2">
                    <div className="avatar-xs rounded-circle flex-shrink-0">
                      <div className="avatar-title border rounded-circle text-uppercase dropdown-sort-name">
                        R
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h6 className="mb-0 dropdown-name">Reporting</h6>
                    <p className="text-muted font-size-13 mb-0 dropdown-sub-desc">
                      Team Reporting
                    </p>
                  </div>
                </a>
                <a
                  className="btn btn-sm btn-link font-size-14 text-center w-100"
                  href="javascript:void(0)"
                >
                  View More..
                </a>
              </div>
            </div>
            {/* Left Menu Start */}
            <ul className="metismenu list-unstyled" id="side-menu">
              <li className="menu-title">Menu</li>
              <li>
                <a href="index.html" className="waves-effect">
                  <i className="uim uim-airplay" />
                  <span className="badge rounded-pill bg-success float-end">
                    3
                  </span>
                  <span>Dashboard</span>
                </a>
              </li>
              {/* <li><NavLink to="/invoice" className="waves-effect">
            <i className="uim uim-airplay" /><span className="badge rounded-pill bg-success float-end">3</span>
            <span>Invoice</span>
          </NavLink></li> */}
              <li>
                <a
                  href="javascript: void(0);"
                  className="has-arrow waves-effect"
                >
                  <i className=" ri-shopping-basket-fill" />
                  <span>Purchase management</span>
                </a>
                <ul className="sub-menu" aria-expanded="false">
                  <li>
                    <NavLink to="/invoice">Invoice</NavLink>
                  </li>
                  <li>
                    <NavLink to="/purchase">Purchase</NavLink>
                  </li>

                  <li>
                    <NavLink to="/purchase_detail">Purchase list</NavLink>
                  </li>
                  
                  <li>
                    <a href="auth-register.html">Purchase_details</a>
                  </li>
                  <li>
                    <a href="auth-recoverpw.html">Purchase Report</a>
                  </li>
                  <li>
                    <a href="auth-lock-screen.html">Lock Screen</a>
                  </li>
                </ul>
              </li>

              <li>
                <a
                  href="javascript: void(0);"
                  className="has-arrow waves-effect"
                >
                  <i className="ri-briefcase-4-fill" />
                  <span>Inventory Management</span>
                </a>
                <ul className="sub-menu" aria-expanded="true">
                  <li>
                    {/* <a href="javascript: void(0);" className="has-arrow">Email</a> */}
                    <ul className="sub-menu" aria-expanded="false">
                      <li>
                        <NavLink to="/product">Product</NavLink>
                      </li>
                      <li>
                        <NavLink to="/category">Category</NavLink>
                      </li>
                      <li>
                        <NavLink to="/uom">Uom</NavLink>
                      </li>
                      <li>
                        <a href="calendar.html">Supplier</a>
                      </li>
                      <li>
                        <a href="apps-chat.html">Warehouse</a>
                      </li>
                      <li>
                        <a href="apps-file-manager.html">Report</a>
                      </li>
                    </ul>
                  </li>

                  {/* <li>
              <a href="javascript: void(0);" className="has-arrow">Invoice</a>
              <ul className="sub-menu" aria-expanded="false">
                <li><a href="invoices.html">Invoices</a></li>
                <li><a href="invoice-detail.html">Invoice Detail</a></li>
              </ul>
            </li> */}
                  {/* <li>
              <a href="javascript: void(0);" className="has-arrow">Users</a>
              <ul className="sub-menu" aria-expanded="false">
                <li><a href="users-list.html">Users List</a></li>
                <li><a href="users-detail.html">Users Detail</a></li>
              </ul>
            </li> */}
                </ul>
              </li>

              <li>
                <a
                  href="javascript: void(0);"
                  className="has-arrow waves-effect"
                >
                  <i className="ri-shopping-cart-2-line" />

                  <span>Sales Management</span>
                </a>
                <ul className="sub-menu" aria-expanded="true">
                  {/* <li>
                    <a href="javascript: void(0);" className="has-arrow">
                      Vertical
                    </a>
                  </li> */}
                  <ul className="sub-menu" aria-expanded="true">
                    <li>
                      {" "}
                      <NavLink to="/order">Order</NavLink>
                    </li>
                    <li>
                      <NavLink to="/order_detail">Order List</NavLink>
                    </li>

                    {/* <li>
                      <NavLink to="/order_details">Order_details</NavLink>
                    </li> */}
                    <li>
                      <NavLink to="/customer">Customer</NavLink>
                    </li>
                    <li>
                      <NavLink to="/status">Status</NavLink>
                    </li>
                    <li>
                      <a href="layouts-boxed.html">Boxed Layout</a>
                    </li>
                    <li>
                      <a href="layouts-preloader.html">Preloader</a>
                    </li>
                  </ul>
                </ul>
              </li>




              <li>
                <a
                  href="javascript: void(0);"
                  className="has-arrow waves-effect"
                >
                  <i className=" ri-store-2-line" />

                  <span>Stock</span>
                </a>
                <ul className="sub-menu" aria-expanded="true">
                  {/* <li>
                    <a href="javascript: void(0);" className="has-arrow">
                      Vertical
                    </a>
                  </li> */}
                  <ul className="sub-menu" aria-expanded="true">
                    <li>
                      {" "}
                      <NavLink to="/stock">Stock</NavLink>
                    </li>
                    <li>
                      <NavLink to="/stock_report">Stock Report</NavLink>
                    </li>
                   
                  </ul>
                </ul>
              </li>

              <li>
                <a
                  href="javascript: void(0);"
                  className="has-arrow waves-effect"
                >
                  <i className=" ri-creative-commons-by-line" />

                  <span>Customer</span>
                </a>
                <ul className="sub-menu" aria-expanded="true">
                  {/* <li>
                    <a href="javascript: void(0);" className="has-arrow">
                      Vertical
                    </a>
                  </li> */}
                  <ul className="sub-menu" aria-expanded="true">
                   
                   
                    <li>
                      <NavLink to="/customer">Customer</NavLink>
                    </li>
                   
              
                  </ul>
                </ul>
              </li>
















            </ul>
          </div>
          {/* Sidebar */}
        </div>
        <div className="dropdown px-3 sidebar-user sidebar-user-info">
          <button
            type="button"
            className="btn w-100 px-0 border-0"
            id="page-header-user-dropdown"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <img
                  src="assets/images/users/photo.png"
                  className="img-fluid header-profile-user rounded-circle"
                  alt
                />
              </div>
              <div className="flex-grow-1 ms-2 text-start">
                <span className="ms-1 fw-medium user-name-text">Admin</span>
              </div>
              <div className="flex-shrink-0 text-end">
                <i className="mdi mdi-dots-vertical font-size-16" />
              </div>
            </span>
          </button>
          <div className="dropdown-menu dropdown-menu-end">
            {/* item*/}
            <a className="dropdown-item" href="pages-profile.html">
              <i className="mdi mdi-account-circle text-muted font-size-16 align-middle me-1" />{" "}
              <span className="align-middle">Profile</span>
            </a>
            <a className="dropdown-item" href="apps-chat.html">
              <i className="mdi mdi-message-text-outline text-muted font-size-16 align-middle me-1" />{" "}
              <span className="align-middle">Messages</span>
            </a>
            <a className="dropdown-item" href="pages-faq.html">
              <i className="mdi mdi-lifebuoy text-muted font-size-16 align-middle me-1" />{" "}
              <span className="align-middle">Help</span>
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="pages-profile.html">
              <i className="mdi mdi-wallet text-muted font-size-16 align-middle me-1" />{" "}
              <span className="align-middle">
                Balance : <b>$5971.67</b>
              </span>
            </a>
            <a className="dropdown-item" href="#">
              <span className="badge bg-primary mt-1 float-end">New</span>
              <i className="mdi mdi-cog-outline text-muted font-size-16 align-middle me-1" />{" "}
              <span className="align-middle">Settings</span>
            </a>
            <a className="dropdown-item" href="auth-lock-screen.html">
              <i className="mdi mdi-lock text-muted font-size-16 align-middle me-1" />{" "}
              <span className="align-middle">Lock screen</span>
            </a>
          </div>
        </div>
      </div>
      {/* Left Sidebar End */}
    </>
  );
};

export default Sidebar;
