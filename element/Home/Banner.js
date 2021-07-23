function Banner() {
  return (
    // <!-- Slider -->
    <div className="banner-two gradient">
      <div className="container">
        <div className="banner-inner">
          <img
            className="img1 move-2"
            src="images/main-slider/slider2/pic3.png"
            alt
          />
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-content text-white">
                <h6
                  className="wow fadeInUp sub-title bgl-light text-white"
                  data-wow-delay="0.5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  Explore digital revolution with us
                </h6>
                <h2
                  className="wow fadeInUp m-b20"
                  data-wow-delay="1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "1s",
                    animationName: "fadeInUp",
                    color: "white",
                  }}
                >
                  Searching for efficient software expertise that meets your
                  needs. We are here to help you
                </h2>
                <p
                  className="wow fadeInUp m-b30"
                  data-wow-delay="1.5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "1.5s",
                    animationName: "fadeInUp",
                  }}
                >
                  We understand how technology plays a vital role in building
                  the future of a company. From web app development, IT
                  consulting to digital marketing and branding - we provide all
                  kinds of IT services that helps the growth of your
                  organization.
                </p>
                {/* <a
                  href="about-us-2.html"
                  className="wow fadeInUp btn btn-light text-primary shadow rounded-xl"
                  data-wow-delay="2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "2s",
                    animationName: "fadeInUp",
                  }}
                >
                  Learn More
                </a> */}
              </div>
            </div>
          </div>
          <img className="img2 move-1" src="images/pattern/pattern8.png" alt />
          <img className="img3 move-2" src="images/pattern/pattern9.png" alt />
        </div>
      </div>
      <div className="dz-media">
        <img src="images/homepage/banner.png" alt />
      </div>
    </div>
  );
}

export default Banner;
