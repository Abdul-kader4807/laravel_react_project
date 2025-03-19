import React from 'react'

const Header = () => {
  return (
    <>
    
    <header id="page-topbar">
  <div className="navbar-header">
    <div className="d-flex">
      {/* LOGO */}
      <div className="navbar-brand-box">
        <a href="index.html" className="logo logo-dark">
          <span className="logo-sm">
            <img src="assets/images/logo-dark.png" alt="logo-sm-dark" height={24} />
          </span>
          <span className="logo-lg">
            <img src="assets/images/logo-sm-dark.png" alt="logo-dark" height={25} />
          </span>
        </a>
        <a href="index.html" className="logo logo-light">
          <span className="logo-sm">
            <img src="assets/images/logo-light.png" alt="logo-sm-light" height={24} />
          </span>
          <span className="logo-lg">
            <img src="assets/images/logo-sm-light.png" alt="logo-light" height={25} />
          </span>
        </a>
      </div>
      <button type="button" className="btn btn-sm px-3 font-size-24 header-item waves-effect vertical-menu-btn" id="vertical-menu-btn">
        <i className="ri-menu-2-line align-middle" />
      </button>
      {/* start page title */}
      <div className="page-title-box align-self-center d-none d-md-block">
        <h4 className="page-title mb-0">Invoices</h4>
      </div>
      {/* end page title */}
    </div>
    <div className="d-flex">
      {/* App Search*/}
      <form className="app-search d-none d-lg-block">
        <div className="position-relative">
          <input type="text" className="form-control" placeholder="Search..." />
          <span className="ri-search-line" />
        </div>
      </form>
      <div className="dropdown d-inline-block d-lg-none ms-2">
        <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="ri-search-line" />
        </button>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-search-dropdown">
          <form className="p-3">
            <div className="mb-3 m-0">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search ..." />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="submit"><i className="ri-search-line" /></button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="dropdown d-none d-sm-inline-block">
        <button type="button" className="btn header-item waves-effect" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img className src="assets/images/flags/bangladesh.png" alt="Header Language" height={16} />
        </button>
        <div className="dropdown-menu dropdown-menu-end">
          {/* item*/}
          <a href="javascript:void(0);" className="dropdown-item notify-item">
            <img src="assets/images/flags/spain.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Spanish</span>
          </a>
          {/* item*/}
          <a href="javascript:void(0);" className="dropdown-item notify-item">
            <img src="assets/images/flags/germany.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">German</span>
          </a>
          {/* item*/}
          <a href="javascript:void(0);" className="dropdown-item notify-item">
            <img src="assets/images/flags/italy.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Italian</span>
          </a>
          {/* item*/}
          <a href="javascript:void(0);" className="dropdown-item notify-item">
            <img src="assets/images/flags/russia.jpg" alt="user-image" className="me-1" height={12} /> <span className="align-middle">Russian</span>
          </a>
        </div>
      </div>
      <div className="dropdown d-none d-lg-inline-block ms-1">
        <button type="button" className="btn header-item noti-icon waves-effect" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="ri-apps-2-line" />
        </button>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
          <div className="px-lg-2">
            <div className="row g-0">
              <div className="col">
                <a className="dropdown-icon-item" href="#">
                  <img src="assets/images/brands/github.png" alt="Github" />
                  <span>GitHub</span>
                </a>
              </div>
              <div className="col">
                <a className="dropdown-icon-item" href="#">
                  <img src="assets/images/brands/bitbucket.png" alt="bitbucket" />
                  <span>Bitbucket</span>
                </a>
              </div>
              <div className="col">
                <a className="dropdown-icon-item" href="#">
                  <img src="assets/images/brands/dribbble.png" alt="dribbble" />
                  <span>Dribbble</span>
                </a>
              </div>
            </div>
            <div className="row g-0">
              <div className="col">
                <a className="dropdown-icon-item" href="#">
                  <img src="assets/images/brands/dropbox.png" alt="dropbox" />
                  <span>Dropbox</span>
                </a>
              </div>
              <div className="col">
                <a className="dropdown-icon-item" href="#">
                  <img src="assets/images/brands/mail_chimp.png" alt="mail_chimp" />
                  <span>Mail Chimp</span>
                </a>
              </div>
              <div className="col">
                <a className="dropdown-icon-item" href="#">
                  <img src="assets/images/brands/slack.png" alt="slack" />
                  <span>Slack</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown d-none d-lg-inline-block ms-1">
        <button type="button" className="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
          <i className="ri-fullscreen-line" />
        </button>
      </div>
      <div className="dropdown d-inline-block">
        <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
          <i className="ri-notification-3-line" />
          <span className="noti-dot" />
        </button>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">
          <div className="p-3">
            <div className="row align-items-center">
              <div className="col">
                <h6 className="m-0"> Notifications </h6>
              </div>
              <div className="col-auto">
                <a href="#!" className="small"> View All</a>
              </div>
            </div>
          </div>
          <div data-simplebar style={{maxHeight: 230}}>
            <a href="#" className="text-reset notification-item">
              <div className="d-flex">
                <div className="avatar-xs me-3">
                  <span className="avatar-title bg-primary rounded-circle font-size-16">
                    <i className="ri-shopping-cart-line" />
                  </span>
                </div>
                <div className="flex-1">
                  <h6 className="mb-1">Your order is placed</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">If several languages coalesce the grammar</p>
                    <p className="mb-0"><i className="mdi mdi-clock-outline" /> 3 min ago</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className="text-reset notification-item">
              <div className="d-flex">
                <img src="assets/images/users/avatar-3.jpg" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                <div className="flex-1">
                  <h6 className="mb-1">James Lemire</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">It will seem like simplified English.</p>
                    <p className="mb-0"><i className="mdi mdi-clock-outline" /> 1 hours ago</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className="text-reset notification-item">
              <div className="d-flex">
                <div className="avatar-xs me-3">
                  <span className="avatar-title bg-success rounded-circle font-size-16">
                    <i className="ri-checkbox-circle-line" />
                  </span>
                </div>
                <div className="flex-1">
                  <h6 className="mb-1">Your item is shipped</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">If several languages coalesce the grammar</p>
                    <p className="mb-0"><i className="mdi mdi-clock-outline" /> 3 min ago</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="#" className="text-reset notification-item">
              <div className="d-flex">
                <img src="assets/images/users/avatar-4.jpg" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                <div className="flex-1">
                  <h6 className="mb-1">Salena Layfield</h6>
                  <div className="font-size-12 text-muted">
                    <p className="mb-1">As a skeptical Cambridge friend of mine occidental.</p>
                    <p className="mb-0"><i className="mdi mdi-clock-outline" /> 1 hours ago</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="p-2 border-top">
            <div className="d-grid">
              <a className="btn btn-sm btn-link font-size-14 text-center" href="javascript:void(0)">
                <i className="mdi mdi-arrow-right-circle me-1" /> View More..
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown d-inline-block">
        <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
          <i className="ri-settings-2-line" />
        </button>
      </div>
    </div>
  </div>
</header>

    
    </>
  )
}

export default Header