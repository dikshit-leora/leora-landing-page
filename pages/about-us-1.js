import { useState } from "react";
import ModalVideo from "react-modal-video";
import Header from "../layout/header";
import Footer from "./../layout/footer";
import Counter from "./../element/counter";
import TeamSlider from "../component/teamSlider";
import Testimonial from "../element/testimonial";
import Blog from "../element/blog";
import Link from "next/link";
import Quote from "../element/quote";
import Clients from "../element/clients-3";
import TechnologySlider from "../component/TechnologySlider";
import Technology from "../element/technology";

function AboutUs1() {
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
              <h1>About us 1</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    About us
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}
        {/* <!-- About Us --> */}
        <section className="content-inner">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-lg-6 m-b30 wow fadeInLeft"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="dz-media">
                  <img src="images/about/img4.png" className="move-3" alt="" />
                </div>
              </div>
              <div
                className="col-lg-6 m-b30 wow fadeInRight"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="section-head style-1 mb-4">
                  <h6 className="sub-title bgl-primary m-b20 text-primary">
                    About Us
                  </h6>
                  <h2 className="title">
                    How we help you to achieve your business goals
                  </h2>
                </div>
                <p>
                  We are the ultimate source of software, established in 2013!
                  At Leora, we believe your business deserves better softwares,
                  that’s ready to go and requires minimal customization. Leora
                  LLP focuses on all IT based services that is available in the
                  market now. Those including, web development, mobile
                  applications & development, office automation, ERP’s, web
                  hosting, networking devices, security cameras, accessories and
                  much more. More than 500 companies trust our software to run
                  their business, as all our products live up to the promise and
                  are backed by the support of world class developers and latest
                  technologies.
                </p>
                {/* <p className="m-b30">
                  Mauris egestas eleifend sapien eu malesuada. Phasellus at
                  metus eget sapien tristique accumsan non sit amet augue.
                </p>
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="list-arrow primary">
                      <li>Nulla dict posuere veliitae.</li>
                      <li>Etiam orci magna, accumsan.</li>
                      <li>Donec fringilla velit risusquis.</li>
                      <li>Aliquam pulvinar tempor.</li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="list-arrow primary">
                      <li>Nulla dict posuere veliitae.</li>
                      <li>Etiam orci magna, accumsan.</li>
                      <li>Donec fringilla velit risusquis.</li>
                      <li>Aliquam diam tempor.</li>
                    </ul>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Counter --> */}
        <Counter />
        <section
          style={{
            backgroundImage: "url(images/about/mission.jpg)",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row action-box style-1 align-items-center">
              <div
                className="col-xl-12 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="section-head style-1 text-center">
                  <h2 className="title">MISSION & VISION</h2>
                  <p
                    data-wow-duration="1.4s"
                    data-wow-delay="1.5s"
                    className="wow fadeInUp m-b30"
                  >
                    Our mission is to set world class standards in the software
                    industry through providing simplest solutions for the
                    complex issues in digital evolution. Whether it’s a
                    consumer-oriented app or a transformative enterprise class
                    solution, the company leads the process from ideation and
                    concept to delivery. It is our love for and dedication to
                    what we do that enables us to become a better company for
                    our clients and business enterprises. To be a global leader
                    in the digital revolution, dedicated to invent tech with
                    demands and be a role model for all software industries
                    through our innovative approaches, skilled personnel and
                    disciplined processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
        <section>
          <div className="section-head style-1 text-center">
            <h2 className="title">Our Clients</h2>
            <p
              data-wow-duration="1.4s"
              data-wow-delay="1.5s"
              className="wow fadeInUp m-b30"
            >
              We are digitally yours! For over 8 years, Leora has been helping
              fortune 500 companies and established brands build solid software
              foundations for their businesses.
            </p>
          </div>
        </section>
        <Clients />
        <br />
        <br />
        <br />
        {/* <!-- About Us --> */}
        {/* <section className="content-inner-2">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-lg-6 wow fadeInLeft"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="section-head style-1">
                  <h6 className="sub-title bgl-primary m-b20 text-primary">
                    Watch Us
                  </h6>
                  <h2 className="title m-b15">
                    Watch How Our Team Help You To Achive Goal
                  </h2>
                  <p>
                    Suspendisse euismod eget lacus quis mattis. Nunc ut auctor
                    justo, et pulvinar lorem nteger tempor nisi venenatis
                  </p>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <div className="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
                      <div className="icon-bx-sm bg-white">
                        <a
                          href="javascript:void(0);"
                          className="icon-cell text-primary"
                        >
                          <i className="flaticon-chat"></i>
                        </a>
                      </div>
                      <div className="icon-content">
                        <h4 className="dlab-title m-b5">Online Support</h4>
                        <p>
                          Quisque efficitur consequat turpis, eget consequat
                          risus vulputate eunc ligula.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="icon-bx-wraper style-6 left p-0 m-b30 icon-up">
                      <div className="icon-bx-sm bg-white">
                        <a
                          href="javascript:void(0);"
                          className="icon-cell text-primary"
                        >
                          <i className="flaticon-bullhorn"></i>
                        </a>
                      </div>
                      <div className="icon-content">
                        <h4 className="dlab-title m-b5">Worldwide Marketing</h4>
                        <p>
                          Quisque efficitur consequat turpis, eget consequat
                          risus vulputate eunc ligula.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 m-b30 wow fadeInRight"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="video-bx style-3">
                  <img src="images/video/intro-thumb.png" alt="" />
                  <div className="video-btn">
                    <a
                      href="#"
                      className="popup-youtube"
                      onClick={() => setOpen(true)}
                    >
                      <i className="flaticon-play"></i>
                    </a>
                  </div>
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
        </section> */}
        {/* <!-- Team --> */}
        <Technology />
        {/* <section className="content-inner">
          <div className="container">
            <div className="section-head style-1 text-center">
              <h6 className="sub-title bgl-primary m-b20 text-primary">
                TECHNOLOGY EXCELLENCE
              </h6>
              <h2 className="title">Our Best Expertise</h2>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <TechnologySlider />
              </div>
            </div>
          </div>
        </section> */}
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
                    At Leora we help business build an intelligently designed
                    digital future. Tell us about your idea, and we’ll offer the
                    most fitting technological solution.
                  </h2>
                </div>
              </div>
              <div
                className="col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <Link href="contact-us-1">
                  <a className="btn btn-link d-inline-flex align-items-center">
                    <i className="fa fa-angle-right m-r10"></i>Talk To Us
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* <Testimonial />
        <Blog />
        <Quote /> */}
      </div>
      <Footer />
    </>
  );
}

export default AboutUs1;
