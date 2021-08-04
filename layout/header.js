import Link from "next/link";
import { useState } from "react";
function Header() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState("home");
  return (
    <>
      {/* <!-- Header --> */}
      <header
        className="site-header header-transparent text-black mo-left"
        id="fix-header"
      >
        {/* <!-- Main Header --> */}
        <div className="sticky-header main-bar-wraper navbar-expand-lg">
          <div className="main-bar clearfix ">
            <div className="container clearfix">
              {/* <!-- Website Logo --> */}
              <div className="logo-header mostion logo-dark">
                <Link href="/">
                  <a>
                    <img
                      style={{
                        backgroundColor: "white",
                        borderRadius: "30px 1px 30px",
                        padding: "5px 0",
                      }}
                      src="images/logo.png"
                      alt=""
                    />
                  </a>
                </Link>
              </div>
              {/* <!-- Nav Toggle Button --> */}
              <button
                className={`navbar-toggler collapsed navicon justify-content-end ${
                  show ? "open" : ""
                }`}
                onClick={() => setShow(!show)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
              {/* <!-- Extra Nav --> */}
              <div className="extra-nav">
                <div className="extra-cell">
                  <Link href="contact-us-1">
                    <a className="btn btn-corner gradient btn-primary">
                      <i className="fa fa-angle-right m-r10"></i>Get A Quote
                    </a>
                  </Link>
                </div>
              </div>
              <div
                className={`header-nav navbar-collapse collapse justify-content-end ${
                  show ? "show" : ""
                }`}
                id="navbarNavDropdown"
              >
                <div className="logo-header">
                  <Link href="/">
                    <a>
                      <img src="images/logo.png" alt="" />
                    </a>
                  </Link>
                </div>
                <ul className="nav navbar-nav navbar">
                  <li>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us">
                      <a>About Us</a>
                    </Link>
                  </li>
                  {/* <li className={`${open === "about" ? "open" : ""}`}><a  onClick={() => setOpen("about")}><span>Pages</span><i className="fa fa-chevron-down"></i></a>
                                    <ul className="sub-menu">
                                        <li><Link href="/about-us-1"><a>About Us</a></Link></li>
										<li><Link href="/faq-1"><a>Faq</a></Link></li>
                                        <li><Link href="/pricing-table-1"><a>Pricing Table</a></Link></li>
										<li><Link href="/team-1"><a>Team</a></Link></li>
                                        <li><Link href="/coming-soon"><a>Coming Soon</a></Link></li>
                                        <li><Link href="/error-404"><a>Error 404</a></Link></li>
                                        <li><Link href="/sitedown"><a>Site Down</a></Link></li>
                                    </ul>
                                </li> */}
                  <li className={`${open === "services" ? "open" : ""}`}>
                    <a onClick={() => setOpen("services")}>
                      <span>
                        <Link href="/services">
                          <a style={{ color: "#262F5A" }}>Services</a>
                        </Link>
                      </span>
                      <i className="fa fa-chevron-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/web-services">
                          <a>WEB APP DEVELOPMENT</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/mobile-services">
                          <a>MOBILE APP DEVELOPMENT</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/it-services">
                          <a>IT CONSULTING</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/erp-services">
                          <a>CUSTOM ERP DEVELOPMENT</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/ui-ux-services">
                          <a>UI/UX</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/gd-services">
                          <a>GRAPHIC DESIGNING</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/branding-services">
                          <a>DIGITAL MARKETING AND BRANDING</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className={`${open === "industries" ? "open" : ""}`}>
                    <a onClick={() => setOpen("industries")}>
                      <span>
                        <Link href="/industries">
                          <a style={{ color: "#262F5A" }}>Industries</a>
                        </Link>
                      </span>
                      <i className="fa fa-chevron-down"></i>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <Link href="/construction-industry">
                          <a>CONSTRUCTION</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/health-industry">
                          <a>HEALTH</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/th-industry">
                          <a>TRAVEL AND HOSPITALITY</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/edu-industry">
                          <a>EDUCATION</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/bank-industry">
                          <a>BANKING</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/ins-industry">
                          <a>INSURANCE</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/retail-industry">
                          <a>RETAIL AND ECOMMERCE</a>
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="/careers">
                      <a>Careers</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us-1">
                      <a>Contact Us</a>
                    </Link>
                  </li>
                </ul>
                <div className="dlab-social-icon">
                  <ul>
                    <Link href="https://en-gb.facebook.com/">
                      <a className="fa fa-facebook"></a>
                    </Link>
                    <Link href="https://twitter.com/login?lang=en">
                      <a className="fa fa-twitter"></a>
                    </Link>
                    <Link href="https://www.linkedin.com/login">
                      <a className="fa fa-linkedin"></a>
                    </Link>
                    <Link href="https://www.instagram.com/">
                      <a className="fa fa-instagram"></a>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Main Header End --> */}
      </header>
      {/* <!-- Header End --> */}
    </>
  );
}

export default Header;
