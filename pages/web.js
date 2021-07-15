import { useState } from "react";
// import ModalVideo from "react-modal-video";
import Header from "../layout/header";
import Footer from "./../layout/footer";
import Counter from "./../element/counter";
import Efficiency from "../element/counter2";
import Clients3 from "../element/clients-3";
// import TeamSlider from "../component/teamSlider";
// import Testimonial from "../element/testimonial";
// import Blog from "../element/blog";
import Link from "next/link";
// import Quote from "../element/quote";
import Clients from "../element/clients-2";
import TechnologySlider from "../component/TechnologySlider";
import Benefits from "../element/benefits";

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
              <h1>Web Development</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Web
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
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
        <Benefits />
        {/* <!-- Counter --> */}
        <Counter />
        <br />
        <br />
        <br />
        <section>
          <div className="section-head style-1 text-center">
            <h2 className="title">LEVERAGE OUR EFFICIENCY</h2>
            <p
              data-wow-duration="1.4s"
              data-wow-delay="1.5s"
              className="wow fadeInUp m-b30"
            >
              Our decade – long experience and UX best practices have allowed us
              to craft an efficient design process to help our clients sketch
              their success stories.
            </p>
          </div>
        </section>
        <Efficiency />
        <section>
          <div className="section-head style-1 text-center">
            <h2 className="title">
              OUR UI AND UX DESIGN SERVICES AND CAPABILITIES
            </h2>
          </div>
        </section>
        <Clients3 />
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
