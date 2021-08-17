function Footer() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer
        className="site-footer style-1"
        id="footer"
        style={{ backgroundImage: "url(images/background/bg10.png)" }}
      >
        <div className="footer-top">
          <div className="container">
            <div
              className="footer-info wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.8s"
            >
              <div className="row align-items-center">
                <div className="col-xl-4 col-md-4">
                  <div className="footer-logo">
                    <a href="/">
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
                  </div>
                </div>
                {/* <div className="col-xl-3 col-md-4 col-sm-6">
                  <div className="icon-bx-wraper left m-b10">
                    <div className="icon-lg">
                      <a href="javascript:void(0);" className="icon-cell">
                        <i className="flaticon-email"></i>
                      </a>
                    </div>
                    <div className="icon-content">
                      <p>
                        +91 987-654-3210
                        <br />
                        info@example.com
                      </p>
                    </div>
                  </div>
                </div> */}
                <div className="col-xl-6 col-md-8 col-sm-12">
                  <div className="icon-bx-wraper left m-b10">
                    <div className="icon-lg">
                      <a href="javascript:void(0);" className="icon-cell">
                        <i className="flaticon-location"></i>
                      </a>
                    </div>
                    <div className="icon-content">
                      <p>
                        HDS Business Centre Tower, Cluster M1, 33rd Floor,
                        Jumeirah Lake Towers, Dubai, Dubai
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="widget widget_about">
                  <h5 className="footer-title">About Us</h5>
                  <p>
                    We established Leora Solutions LLP in the year 2014.
                    Initially, we started with a small team and were focusing on
                    IT consulting and Web hosting.
                  </p>
                  <div className="dlab-social-icon">
                    <ul>
                      <li>
                        <a
                          className="fa fa-facebook"
                          href="https://en-gb.facebook.com/"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa fa-instagram"
                          href="https://www.instagram.com/"
                        ></a>
                      </li>
                      <li>
                        <a
                          className="fa fa-twitter"
                          href="https://twitter.com/login?lang=en"
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="widget widget_services">
                  <h5 className="footer-title">Our links</h5>
                  <ul>
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/about-us">About Us</a>
                    </li>
                    <li>
                      <a href="/services">Services</a>
                    </li>
                    <li>
                      <a href="/industries">Industries</a>
                    </li>
                    <li>
                      <a href="/careers">Careers</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
              >
                <div className="widget widget_services">
                  <h5 className="footer-title">Our Services</h5>
                  <ul>
                    <li>
                      <a href="/web-services">Web Development</a>
                    </li>
                    <li>
                      <a href="/mobile-services">Mobile App Development</a>
                    </li>
                    <li>
                      <a href="/it-services">IT Consulting</a>
                    </li>
                    <li>
                      <a href="/erp-services">Custom ERP Development</a>
                    </li>
                    <li>
                      <a href="/ui-ux-services">UI / UX</a>
                    </li>
                    <li>
                      <a href="/gd-services">Graphic Designing</a>
                    </li>
                    <li>
                      <a href="/branding-services">
                        Digital Marketing And Branding
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.8s"
              >
                <div className="widget widget_services">
                  <h5 className="footer-title">Industries</h5>
                  <ul>
                    <li>
                      <a href="/construction-industry">Construction</a>
                    </li>
                    <li>
                      <a href="/health-industry">Health</a>
                    </li>
                    <li>
                      <a href="/th-industry">Travel & Hospitality</a>
                    </li>
                    <li>
                      <a href="/edu-industry">Education</a>
                    </li>
                    <li>
                      <a href="/bank-industry">Banking</a>
                    </li>
                    <li>
                      <a href="/ins-industry">Insurance</a>
                    </li>
                    <li>
                      <a href="/retail-industry">Retail & Ecommerce</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- footer bottom part --> */}
        <div
          className="footer-bottom wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <span className="copyright-text">
                  Copyright © 2021{" "}
                  <a href="https://dexignzone.com/" target="_blank">
                    DexignZone
                  </a>
                  . All rights reserved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer End --> */}
    </>
  );
}

export default Footer;
