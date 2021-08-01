import { useState } from "react";

function IndustryTiles() {
  const [open, setOpen] = useState("p2");
  return (
    <>
      {/* <!-- Service --> */}
      <section className="content-inner">
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
                    ? "icon-bx-wraper style-5 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-5 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p1")}
              >
                <div className="icon-bx">
                  <span className="icon-cell">
                    <i className="fa fa-building-o"></i>
                  </span>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15">CONSTRUCTION</h4>
                  <p className="m-b20">
                    Utilize the benefit of technology to remove unnecessary
                    disruption and meet the project deadline hastily.
                  </p>
                  {/* <Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link> */}
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
                    ? "icon-bx-wraper style-5 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-5 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p2")}
              >
                <div className="icon-bx">
                  <span className="icon-cell">
                    <i className="fa fa-heartbeat"></i>
                  </span>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15">HEALTH CARE</h4>
                  <p className="m-b20">
                    Medical sector follows a stimulating work style; thus, we
                    strive to add our small contribution by reducing your work
                    load.
                  </p>
                  {/* <Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link> */}
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
                    ? "icon-bx-wraper style-5 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-5 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p3")}
              >
                <div className="icon-bx">
                  <span className="icon-cell">
                    <i className="fa fa-plane"></i>
                  </span>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15">TRAVEL & HOSPITALITY</h4>
                  <p className="m-b20">
                    Optimize your business activities to feed your customer with
                    best.
                  </p>
                  {/* <Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link> */}
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
                    ? "icon-bx-wraper style-5 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-5 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p4")}
              >
                <div className="icon-bx">
                  <span className="icon-cell">
                    <i className="fa fa-book"></i>
                  </span>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15">EDUCATION</h4>
                  <p className="m-b20">
                    Advance young minds with innovative learning experience
                  </p>
                  {/* <Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link> */}
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
                    ? "icon-bx-wraper style-5 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-5 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p5")}
              >
                <div className="icon-bx">
                  <span className="icon-cell">
                    <i className="fa fa-dollar"></i>
                  </span>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15">BANKING & INSURANCE</h4>
                  <p className="m-b20">
                    Leverage financial capabilities with smart, secure software
                    solutions.
                  </p>
                  {/* <Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link> */}
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
                    ? "icon-bx-wraper style-5 box-hover text-center m-b30 active"
                    : "icon-bx-wraper style-5 box-hover text-center m-b30"
                }`}
                onMouseOver={() => setOpen("p6")}
              >
                <div className="icon-bx">
                  <span className="icon-cell">
                    <i className="fa fa-shopping-cart"></i>
                  </span>
                </div>
                <div className="icon-content">
                  <h4 className="dlab-title m-b15">RETAIL ECOMMERCE</h4>
                  <p className="m-b20">
                    Strengthen your online shop with our service that are
                    tailored to your requirements.
                  </p>
                  {/* <Link href="services-3"><a className="btn btn-outline-primary"><i className="fa fa-angle-right"></i></a></Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IndustryTiles;
