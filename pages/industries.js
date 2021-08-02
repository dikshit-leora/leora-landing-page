import Footer from "../layout/footer";
import Header from "../layout/header";
import { useState } from "react";
import IndustryTiles from "../element/Industries/IndustryTiles";
import FromClient from "../element/Industries/FromClient";
import Link from "next/link";

function Industries() {
  const [open, setOpen] = useState("p2");
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr style-1 overlay-primary-dark"
          style={{
            backgroundImage: "url(images/banner/bnr1.jpg), var(--gradient-sec)",
            backgroundSize: "cover, 200%",
          }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Industries</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row style-1">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Industries
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End -->  */}

        {/* <!-- IndustryTiles --> */}
        <IndustryTiles />

        <section className="content-inner bg-gray">
          <div className="container">
            <div className="section-head style-3 text-center">
              <h2 className="title">WHY WITH US</h2>
              <div className="dlab-separator style-2 bg-primary"></div>
            </div>
            <div className="row align-items-center about-wraper-2">
              <div className="col-lg-4">
                <div className="row">
                  <div
                    className="col-lg-12 col-md-6 wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.2s"
                  >
                    <div className="icon-bx-wraper left m-b50 icon-up">
                      <div className="icon-bx-sm radius gradient-sec shadow-primary m-b20">
                        <a
                          href="javascript:void(0);"
                          className="icon-cell text-white"
                        >
                          <i className="fa fa-star-half-full"></i>
                        </a>
                      </div>
                      <div className="icon-content">
                        <h4 className="dlab-tilte text-capitalize">
                          8+ YEAR EXPERIENCE
                        </h4>
                        {/* <p>
                          Praesent tincidunt congue est ut hendrerit.
                          Pellentesque et eros sit amet ipsum venenatis.
                        </p> */}
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-12 col-md-6 wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.4s"
                  >
                    <div className="icon-bx-wraper left m-b50 icon-up">
                      <div className="icon-bx-sm radius gradient-sec shadow-primary m-b20">
                        <a
                          href="javascript:void(0);"
                          className="icon-cell text-white"
                        >
                          <i className="la la-handshake"></i>
                        </a>
                      </div>
                      <div className="icon-content">
                        <h4 className="dlab-tilte text-capitalize">
                          <br />
                          BEST BUSINESS
                        </h4>
                        {/* <p>
                          Praesent tincidunt congue est ut hendrerit.
                          Pellentesque et eros sit amet ipsum venenatis.
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
              >
                <div className="dz-media text-center m-b30">
                  <img
                    src="images/industries/1.gif"
                    className="move-4"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <div
                    className="col-lg-12 col-md-6 wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.2s"
                  >
                    <div className="icon-bx-wraper left m-b50 icon-up">
                      <div className="icon-bx-sm radius gradient-sec shadow-primary m-b20">
                        <a
                          href="javascript:void(0);"
                          className="icon-cell text-white"
                        >
                          <p style={{ fontWeight: "bold", margin: 0 }}>500+</p>
                        </a>
                      </div>
                      <div className="icon-content">
                        <h4 className="dlab-tilte text-capitalize">
                          MORE THEN 500 PROJECTS
                        </h4>
                        {/* <p>
                          Praesent tincidunt congue est ut hendrerit.
                          Pellentesque et eros sit amet ipsum venenatis.
                        </p> */}
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-12 col-md-6 wow fadeInUp"
                    data-wow-duration="2s"
                    data-wow-delay="0.4s"
                  >
                    <div className="icon-bx-wraper left m-b50 icon-up">
                      <div className="icon-bx-sm radius gradient-sec shadow-primary m-b20">
                        <a
                          href="javascript:void(0);"
                          className="icon-cell text-white"
                        >
                          <i className="fa fa-cloud-upload"></i>
                        </a>
                      </div>
                      <div className="icon-content">
                        <h4 className="dlab-tilte text-capitalize">
                          <br />
                          BACKUP
                        </h4>
                        {/* <p>
                          Praesent tincidunt congue est ut hendrerit.
                          Pellentesque et eros sit amet ipsum venenatis.
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FromClient />
      </div>
      <Footer />
    </>
  );
}

export default Industries;
