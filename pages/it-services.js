import Footer from "../layout/footer";
import Header from "../layout/header";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import AllServices from "../element/all-services";
import Link from "next/link";

function ServicesDetails1() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr overlay-primary-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>IT Consulting</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    IT Consulting
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
                  <img src="images/blog/default/thum1.jpg" alt="" />
                </div>
                <div className="dlab-content">
                  <div className="m-b40">
                    <h3>IT Consulting</h3>
                    <p>
                      Leora is an established IT consulting company, we deliver
                      a full-service package that enables our clients to embrace
                      technologies that stimulate the company’s growth. We
                      provide a result-oriented service that will upgrade your
                      software architecture, strategy, improve operations by
                      optimizing your software portfolio. Quality and
                      affordability are a necessity of every business, our
                      experts with effective approaches try to maintain balance
                      and deliver a solution that will turn your vision into
                      profit.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <h3>WHAT WE PROVIDE:</h3>
                      <p>
                        Fortunate to satisfy more than 50 + clients with our
                        guidance.
                      </p>
                      <ul className="list-arrow primary m-b30">
                        <li>
                          Formularize strategy bringing your IT resources into
                          an agreement with business needs.
                        </li>
                        <li>
                          Well, a clear plan including budget, timeline,
                          resources.
                        </li>
                        <li>DevOps, Scrum, Agile /waterfall methodology.</li>
                        <li>Maintain scalable and secure IT infrastructure.</li>
                        <li>24 hours help desk.</li>
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
                          channel="youtube"
                          autoplay
                          isOpen={isOpen}
                          videoId="UpolBSznWp0"
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
        <br />

        {/* <!-- Service --> */}
        {/* <AllServices/> */}

        {/* <!-- Call To action --> */}
        {/* <section
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
