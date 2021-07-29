import Footer from "../layout/footer";
import Header from "../layout/header";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import WeOffer from "../element/Services/BrandingServices/WeOffer";
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
              <h1>Digital Marketing and Branding</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Digital Marketing and Branding
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
                    src="images/banner/Services/digital_marketing.png"
                    alt=""
                  />
                </div>
                <div className="dlab-content">
                  <div className="m-b40">
                    <h3>Digital Marketing and Branding</h3>
                    <p>
                      A brand is a reputation of an organization. We understand
                      it requires a lifetime of work to create a brand value.
                      Thus, we make this process simple by adding our
                      result-oriented strategies that will help you to establish
                      a distinctive identity. We begin with discovering the
                      strength and weaknesses of your existing strategy,
                      analyzing your completion and then we implement high-level
                      digital practices that will build a solid reputation of
                      your company in the market. Our specialized team of
                      experts always keep a close eye on changing market trend
                      which will prepare you to outperform your competition.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <h3>BENEFITS OF OUR SERVICE.</h3>
                      <p>We build our branding by building yours.</p>
                      <ul className="list-arrow primary m-b30">
                        <li>Unconventional marketing strategy.</li>
                        <li>Interactive visual design.</li>
                        <li>Timely and suitable content.</li>
                        <li>Well-organized websites.</li>
                        <li>Interactive social media channel.</li>
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

        {/* <!-- We Offer --> */}
        <WeOffer />

        <h3 className="text-center">“BUILD YOUR BRAND WITH US”</h3>
        <br />
        <br />

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
