import Footer from "../layout/footer";
import Header from "../layout/header";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import WeOffer from "../element/Services/WebServices/WeOffer";

function WebAppDevelopment() {
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
              <h1>Web App Development</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Web App Development
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
                  <img src="images/services/web_dev.jpg" alt="" />
                </div>
                <div className="dlab-content">
                  <div className="m-b40">
                    <h3>PROFESSIONAL WEB APP DEVELOPMENT SERVICE</h3>
                    <p>
                      Leora delivers powerful custom web applications which is
                      productive, responsive, secure that thrive the efficiency
                      of your business standard. So far, we have developed
                      different types of web apps which vary from static web
                      apps to ERP solutions. There are lots of firms that can
                      build a “web app” but only a few can give the “top-class
                      app” of your choice.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <h3>Why Leora as your web development partner?</h3>
                      <p>
                        We know you are working 24 hours to take your business
                        to next level and we understand the value of your time.
                        Thus, we offer
                      </p>
                      <ul className="list-arrow primary m-b30">
                        <li>
                          Flexibility -This allows you to work from anywhere at
                          any time.
                        </li>
                        <li>
                          Latest technology- Our agile experts build an app
                          using react js, HTML, WordPress.
                        </li>
                        <li>
                          SaaS app development service- Provides data security,
                          friendliness, saves cost.
                        </li>
                        <li>Organized development process.</li>
                        <li>24*7 Support.</li>
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

        {/* <!-- WeOffer --> */}
        <WeOffer />
        <h3 className="text-center">“BUILD APP LIKE NEVER BEFORE”</h3>
        <br />
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

export default WebAppDevelopment;
