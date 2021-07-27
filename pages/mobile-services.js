import Footer from "../layout/footer";
import Header from "../layout/header";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import WeOffer from "../element/Services/MobileServices/WeOffer";

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
              <h1>Mobile App Services</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Mobile App Services
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
                    <h3>FINEST MOBILE APP DEVELOPMENT SERVICE</h3>
                    <p>
                      The Mobile App market is skyrocketing. It is estimated by
                      the end of the year 6.1 million population will have
                      mobile connectivity. Thus, finding the right choice to
                      conquer this digital world, is gaining importance. So, why
                      wait when you can join hands with the industry’s leading
                      name.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <h3>
                        WHY CHOOSE LEORA AS YOUR MOBILE APP DEVELOPMENT PARTNER?
                      </h3>
                      <p>
                        We design and develop a custom app for all types of
                        companies, from start-ups to enterprises. Our focus is
                        to develop a unique application that meets your mobile
                        vision. Our professional’s first listen to your
                        requirements and then they choose technology and model
                        that fits your needs. Besides, our clients claim that
                        scalability, UI design, performance is the key feature
                        of our apps. Keeping in the stream with the latest
                        trends, our full stack developer utilizes react native,
                        iconic, flutter.
                      </p>
                      <h4>NATIVE APP DEVELOPMENT</h4>
                      <ul className="list-arrow primary m-b30">
                        <li>
                          <h5 style={{ margin: 0 }}>IOS APP DEVELOPMENT</h5>
                        </li>
                        <p>
                          Leora has 100+ satisfied clients around the globe. Our
                          expertise in swift programming will help you to reach
                          your target audience.
                        </p>
                        <li>
                          <h5 style={{ margin: 0 }}>ANDROID DEVELOPMENT-</h5>
                        </li>
                        <p>
                          Android has remained always on the favorite list among
                          entrepreneurs. Android OS power tablets, smartphones,
                          smartwatches, games, and apps are used all around the
                          world today. We have mastered developers skilled for
                          each of these platforms.
                        </p>
                      </ul>
                      <h4>CROSS-PLATFORM DEVELOPMENT</h4>
                      <ul className="list-arrow primary m-b30">
                        <li>
                          We provide end-to-end hybrid applications. Our team
                          has expertise in React Native, Flutter and Ionic
                          cross-platform framework.
                        </li>
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

        <div
          style={{ width: "100%", display: "grid", placeItems: "center" }}
          className="text-right m-b40 wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.4s"
        >
          <a
            href="/contact-us-1"
            className="btn btn-link d-inline-flex align-items-center"
            // style={{ alignSelf: "center" }}
          >
            <i className="fa fa-angle-right m-r10"></i>Learn More
          </a>
        </div>

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
