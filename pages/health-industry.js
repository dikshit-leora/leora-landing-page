import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import Intro from "../element/Industries/Health/Intro";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Head from "next/head";

function Health() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Head>
        <title>Leora - Health</title>
      </Head>
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
              <h1>Health</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row style-1">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Health
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- Intri --> */}
        <Intro />

        {/* <!-- Video --> */}
        <section className="video-wraper-1">
          <div className="content-inner bg-gray">
            <div className="container">
              <div className="row align-items-center">
                <div
                  className="col-lg-6 wow fadeInLeft"
                  data-wow-duration="2s"
                  data-wow-delay="0.2s"
                >
                  <div className="section-head style-3 mb-4">
                    <h2 className="title">WHAT WE OFFER</h2>
                    <div className="dlab-separator style-2 bg-primary"></div>
                  </div>
                  <p>
                    With every new project we try to break our boundaries, thus
                    we can serve you better.
                  </p>
                  <ul className="list-check style-1 primary m-b30">
                    <li>
                      Mobile and web service- Patients and physicians can access
                      critical insights from anywhere at any time.
                    </li>
                    <li>
                      Telemedicine- Connect doctors and patients without being
                      in a single room.
                    </li>
                    <li>
                      E pharma- Enables customers to order medicines from
                      licensed pharmacies without visiting directly.
                    </li>
                    <li>
                      Appointment visitor management- Automatize appointments.
                    </li>
                  </ul>
                </div>
                <div
                  className="col-lg-6 wow fadeInRight"
                  data-wow-duration="2s"
                  data-wow-delay="0.4s"
                >
                  <div className="video-bx style-2">
                    <img src="images/video/intro-thumb.png" alt="" />
                    <div className="video-btn"></div>
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
        </section>
        <br />
        <h4 className="text-center">???UPGRADE YOUR HEALTH CARE WITH US???</h4>
        <br />
      </div>
      <Footer />
    </>
  );
}

export default Health;
