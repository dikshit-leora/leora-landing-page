import Footer from "../layout/footer";
import Header from "../layout/header";
import { useState } from "react";
import ModalVideo from "react-modal-video";
// import AllServices from "../element/all-services";
import Link from "next/link";
import Head from "next/head";

function ServicesDetails1() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Leora - ERP Services</title>
      </Head>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr overlay-primary-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Custom ERP Development</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Custom ERP Development
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- Services Details --> */}
        <section
          className="content-inner-2"
          style={{ backgroundImage: "url(images/background/bg1.png)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="dlab-media m-b30 rounded-md">
                  <img
                    src="https://leora-solutions.s3.ap-south-1.amazonaws.com/landing/services/ERP.png"
                    alt=""
                  />
                </div>
                <div className="dlab-content">
                  <div className="m-b40">
                    <h3>Custom ERP Development</h3>
                    <p>
                      Enterprise Resource Planning systems are software systems
                      that prove to be of great help in planning,
                      administration, and optimizing business function. Leora is
                      a committed custom ERP development company that delivers
                      an efficient, flexible pricing system that simplifies your
                      daily task by automating the process. Our experts ensure
                      that the technology is aligned with your requirement
                      despite the size of the organization. Our agile experts
                      utilize MongoDB, a Document-oriented database that is
                      considered the most powerful data model.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <h3>ADVANTAGES OF OUR ERP SOFTWARE</h3>
                      <p>
                        Leverage the power of cloud computing and integrating
                        with great agility to develop a secure and efficient ERP
                        solution.
                      </p>
                      <ul className="list-arrow primary m-b30">
                        <li>
                          Reduce use of manual spreadsheets up to 70% by using
                          one back-office system including financials,
                          fulfillment, inventory, and sales.
                        </li>
                        <li>
                          Gain daily cash balance visibility using KPI’s,
                          scorecards, and real-time dashboards.
                        </li>
                        <li>
                          Save up to 85% of the IT cost associated with
                          maintaining and upgrading separate applications.
                        </li>
                        <li>Cloud security.</li>
                        <li>Scalability to adapt your marketing dynamics.</li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <div className="video-bx style-3">
                        <img src="images/video/pic3.jpg" alt="" />
                        <div className="video-btn">
                          <a
                            href="#"
                            className="popup-youtube"
                            onClick={() => setOpen(true)}
                          >
                            <i className="flaticon-play"></i>
                          </a>
                        </div>
                        <ModalVideo
                          channel="custom"
                          url="https://leora-solutions.s3.ap-south-1.amazonaws.com/landing/videos/intro.mp4"
                          autoplay
                          isOpen={isOpen}
                          videoId="FzcfZyEhOoI"
                          onClose={() => setOpen(false)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />

        {/* <AllServices />

        <section
          style={{
            backgroundImage: "url(images/background/bg5.jpg)",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row action-box style-1 align-items-center">
              <div
                className="col-xl-7 col-lg-8 col-md-8 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="section-head style-1">
                  <h6 className="sub-title bgl-primary m-b20 text-primary">
                    More With Us
                  </h6>
                  <h2 className="title">
                    You Want To Showcase Your Website In Top Join With Us
                  </h2>
                </div>
              </div>
              <div
                className="col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <a
                  href="/contact-us-1"
                  className="btn btn-link d-inline-flex align-items-center"
                >
                  <i className="fa fa-angle-right m-r10"></i>Join Now
                </a>
              </div>
            </div>
          </div>
        </section> */}
      </div>
      <Footer />
    </>
  );
}

export default ServicesDetails1;
