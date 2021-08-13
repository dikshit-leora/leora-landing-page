import Link from "next/link";

function AboutUs() {
  return (
    <>
      <section className="content-inner">
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 m-b30 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="dz-media">
                <img src="images/homepage/1.gif" className="move-1" alt="" />
              </div>
            </div>
            <div
              className="col-lg-6 m-b30 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div className="section-head style-1 mb-4">
                <h6 className="sub-title bgl-primary m-b20 text-primary">
                  Our story
                </h6>
                <h2 className="title">Who We are ?</h2>
              </div>
              <p>
                We were always fascinated with technology changing the face of a
                company. However, for a long time, we had the vision to be part
                of this digital revolution and help clients with the right
                software solutions that can untangle their complex issues.
              </p>
              <p className="m-b30">
                Thus, with this initiative, we started the Leora Solutions LLP
                where the client will be our success partner and will work
                together as a team for finding the solution for real-life
                problems.
              </p>
              {/* <img src="images/sign.png" alt="" />
              <h4 className="m-b30">CEO Jhone Doe</h4> */}
              <Link href="about-us">
                <a className="btn btn-link d-inline-flex align-items-center">
                  <i className="fa fa-angle-right m-r10"></i>Know more
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
