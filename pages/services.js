import Footer from "../layout/footer";
import Header from "../layout/header";
import { useState } from "react";
import Team from "../element/team";
import Link from "next/link";
import Quote from "../element/quote";
import ServicesTiles from "../element/Services/Home/Services";

function Services() {
  const [open, setOpen] = useState("p2");
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
              <h1>Services</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Services
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>
        {/* <!-- Banner End --> */}

        {/* <!-- Services --> */}
        <ServicesTiles />

        {/* <!-- Newsletter --> */}
        {/* <section className="content-inner-3 bg-primary" style={{"backgroundImage":"url(images/background/bg13.png)","backgroundRepeat":"no-repeat","backgroundSize":"cover"}}>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-4 col-md-6 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
						<div className="dlab-media m-b30">
							<img src="images/about/img9.png" className="move-2" alt=""/>
						</div>
					</div>
					<div className="col-lg-8 col-md-6 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
						<div className="section-head style-1 text-white">
							<h6 className="sub-title bgl-light m-b20">Newsletter</h6>
							<h2 className="title m-b30">Subscribe To Our Newsletter For Latest Update Of Finanical Services </h2>
							<p>Curabitur eleifend nibh sit amet ex posuere, vel malesuada turpis pretium. Quisque et tincidunt risus, a tempor massa. Cras tempor egestas libero, eu laoreet enim pharetra non.</p>
						</div>
						<div className="dlab-subscribe style-2 max-w500">
							<form className="dzSubscribe" action="script/mailchamp.php" method="post">
								<div className="dzSubscribeMsg"></div>
								<div className="form-group">
									<div className="input-group">
										<input name="dzEmail" required="required" type="email" className="form-control" placeholder="Email Address"/>
										<div className="input-group-addon">
											<button name="submit" value="Submit" type="submit" className="btn rounded-xl shadow btn-primary">Subscribe Now</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>	 */}

        {/* <!-- Fetures --> */}
        <section className="content-inner-2">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-xl-6 col-lg-7 wow fadeInLeft"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="section-head style-1">
                  {/* <h6 className="sub-title bgl-primary m-b20 text-primary">
				  la-gear
                  </h6> */}
                  <h2 className="title">Why We Prefer Agile Methodology</h2>
                </div>
                <div className="section-wraper-one">
                  <div className="icon-bx-wraper style-2 left m-b30">
                    <div className="icon-bx-md radius bg-white text-red">
                      <a href="javascript:void(0);" className="icon-cell">
                        <i className="fa fa-refresh"></i>
                      </a>
                    </div>
                    <div className="icon-content">
                      <h4 className="dlab-title">ITERATIVE APPROACH</h4>
                      <p>
                        Agile is an iterative approach that breaks the project
                        and delivers transparent outcomes in 2-4 cycles weekly
                        called as sprint, hence this process gives multiple
                        opportunities for client and project team’s engagement.
                      </p>
                    </div>
                  </div>
                  <div className="icon-bx-wraper style-2 left m-b30">
                    <div className="icon-bx-md radius bg-white text-yellow">
                      <a href="javascript:void(0);" className="icon-cell">
                        <i className="flaticon-dollar"></i>
                      </a>
                    </div>
                    <div className="icon-content">
                      <h4 className="dlab-title">Predictable Cost</h4>
                      <p>
                        As each sprint has a fixed duration, cost can be
                        estimated accordingly. Combined with the estimates
                        provided to the client prior to each Sprint, Client gets
                        approximate idea of cost for each feature earlier.
                      </p>
                    </div>
                  </div>
                  <div className="icon-bx-wraper style-2 left m-b30">
                    <div className="icon-bx-md radius bg-white text-green">
                      <a href="javascript:void(0);" className="icon-cell">
                        <i className="la la-certificate"></i>
                      </a>
                    </div>
                    <div className="icon-content">
                      <h4 className="dlab-title">Quality</h4>
                      <p>
                        By breaking the project into manageable unit, our team
                        can focus separately on planning, development and
                        testing phase which improves the quality, and in case of
                        additional changes there is an opportunity to constantly
                        refine and reprioritize the overall product backlog.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-5 wow fadeInRight"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="dlab-media">
                  <img src="images/about/img5.png" className="move-2" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <br />
        <br />
        <br />
        <h2 className="text-center">SERVICES THAT MEET YOUR EXPECTATION</h2>
        <br />
        <br />
        <br />

        {/* <!-- Team --> */}
        {/* <Team /> */}

        {/* <!-- Testimonials --> */}
        {/* <Testimonial/> */}

        {/* <!-- Get A Quote --> */}
        {/* <Quote /> */}

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

export default Services;
