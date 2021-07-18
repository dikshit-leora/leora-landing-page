import Slider from "react-slick";

function OfficesSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    arrows: false,
    speed: 3500,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <>
      <Slider
        {...settings}
        className="team-carousel2 owl owl-carousel owl-none owl-theme owl-dots-primary-full"
      >
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.1s"
        >
          <div className="dlab-team style-2 m-b10">
            <div className="dlab-media">
              <a href="javascript:void(0);" style={{ cursor: "default" }}>
                <img
                  src="images/offices/coimbatore.jpg"
                  style={{ minHeight: 200 }}
                  alt=""
                />
              </a>
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h3 className="dlab-name">
                  <a href="javascript:void(0);" style={{ cursor: "default" }}>
                    Coimbatore
                  </a>
                </h3>
                {/* <span className="dlab-position">Senior Designer</span> */}
              </div>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.2s"
        >
          <div className="dlab-team style-2 m-b10">
            <div className="dlab-media">
              <a href="javascript:void(0);" style={{ cursor: "default" }}>
                <img
                  src="images/offices/dubai.jpg"
                  style={{ minHeight: 200 }}
                  alt=""
                />
              </a>
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h3 className="dlab-name">
                  <a href="javascript:void(0);" style={{ cursor: "default" }}>
                    Dubai
                  </a>
                </h3>
                {/* <span className="dlab-position">Senior Designer</span> */}
              </div>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.3s"
        >
          <div className="dlab-team style-2 m-b10">
            <div className="dlab-media">
              <a href="javascript:void(0);" style={{ cursor: "default" }}>
                <img
                  src="images/offices/kochi.jpg"
                  style={{ minHeight: 200 }}
                  alt=""
                />
              </a>
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h3 className="dlab-name">
                  <a href="javascript:void(0);" style={{ cursor: "default" }}>
                    Kochi
                  </a>
                </h3>
                {/* <span className="dlab-position">Senior Designer</span> */}
              </div>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.4s"
        >
          <div className="dlab-team style-2 m-b10">
            <div className="dlab-media">
              <a href="javascript:void(0);" style={{ cursor: "default" }}>
                <img
                  src="images/offices/muscat.jpg"
                  style={{ minHeight: 200 }}
                  alt=""
                />
              </a>
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h3 className="dlab-name">
                  <a href="javascript:void(0);" style={{ cursor: "default" }}>
                    Muscat
                  </a>
                </h3>
                {/* <span className="dlab-position">Senior Designer</span> */}
              </div>
            </div>
          </div>
        </div>
        <div
          className="item wow fadeInUp"
          data-wow-duration="2s"
          data-wow-delay="0.5s"
        >
          <div className="dlab-team style-2 m-b10">
            <div className="dlab-media">
              <a href="javascript:void(0);" style={{ cursor: "default" }}>
                <img
                  src="images/offices/muscat.jpg"
                  style={{ minHeight: 200 }}
                  alt=""
                />
              </a>
            </div>
            <div className="dlab-content">
              <div className="clearfix">
                <h3 className="dlab-name">
                  <a href="javascript:void(0);" style={{ cursor: "default" }}>
                    Muscat
                  </a>
                </h3>
                {/* <span className="dlab-position">Senior Designer</span> */}
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}

export default OfficesSlider;
