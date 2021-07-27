import { useState } from "react";

function Services() {
  const [open, setOpen] = useState("p2");
  return (
    <>
      {/* <!-- Service --> */}
      <section
        className="content-inner"
        style={{ backgroundImage: "url(images/background/bg1.png)" }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.1s"
            >
              <div
                className={`${
                  open === "p1"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p1")}
              >
                <div className="icon-bx-md radius bg-yellow shadow-yellow">
                  <a href="javascript:void(0);" className="icon-cell">
                    <i className="flaticon-office"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">WEB APP DEVELOPMENT</h4>
                  <p>
                    Web Application act as a Frontline to reach potential
                    Customers. Our skilled team actively work to deliver unique,
                    friendly result meets your standard.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div
                className={`${
                  open === "p2"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p2")}
              >
                <div className="icon-bx-md radius bg-red shadow-red">
                  <a href="javascript:void(0);" className="icon-cell">
                    <i className="fa fa-mobile-phone"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">MOBILE APP DEVELOPMENT</h4>
                  <p>
                    Doesn’t matter you are developing for iOS, android or
                    windows OS platform. we prefer agile Methodology for
                    development, Which is considered as the best approach for
                    development.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.3s"
            >
              <div
                className={`${
                  open === "p3"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p3")}
              >
                <div className="icon-bx-md radius bg-green shadow-green">
                  <a href="javascript:void(0);" className="icon-cell">
                    <i className="fa fa-handshake-o"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">IT Consulting</h4>
                  <p>
                    IT consulting is a preliminary step in every project. Thus,
                    Connecting with right technology experts saves you time,
                    resources and enhances business value.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div
                className={`${
                  open === "p4"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p4")}
              >
                <div className="icon-bx-md radius bg-skyblue shadow-skyblue">
                  <a href="javascript:void(0);" className="icon-cell">
                    <i className="flaticon-coding"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">UI / UX</h4>
                  <p>
                    Simplicity gives more clarity. We aim to create simple,
                    user-friendly interfaces which gives better understanding of
                    complex products.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.5s"
            >
              <div
                className={`${
                  open === "p5"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p5")}
              >
                <div className="icon-bx-md radius bg-orange shadow-orange">
                  <a href="javascript:void(0);" className="icon-cell">
                    <i className="la la-gear"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">Custom ERP</h4>
                  <p>
                    ERP’s automates process and enhances efficiency of
                    organization. We deliver ERPs based on your business
                    requirements and also concentrates on factors like
                    Flexibility, Cost and user-friendliness.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-duration="2s"
              data-wow-delay="0.6s"
            >
              <div
                className={`${
                  open === "p6"
                    ? "icon-bx-wraper style-1 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-1 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p6")}
              >
                <div className="icon-bx-md radius bg-maroon shadow-maroon">
                  <a href="javascript:void(0);" className="icon-cell">
                    <i className="ti ti-write"></i>
                  </a>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title">
                    Graphic designing Digital Marketing/Branding
                  </h4>
                  <p>
                    These services remain as a key factor for building
                    professional brands. Our service encompasses SEO, SMO,
                    ,LOGOS,Marketing collateral and designing brand elements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
