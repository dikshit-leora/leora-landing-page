import Slider from "react-slick";

function FromClientSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3500,
    arrows: false,
  };
  return (
    <>
      <Slider
        {...settings}
        className="testimonials-carousel2 owl-carousel owl-theme owl-none owl-theme owl-dots-primary-full wow fadeIn"
        data-wow-duration="2s"
        data-wow-delay="0.6s"
      >
        <div className="item">
          <div className="testimonial-2">
            <div className="testimonial-pic quote-right">
              <img src="images/testimonials/pic1.jpg" alt="" />
            </div>
            <div className="testimonial-text">
              <p>
                They are extremely responsive and Professional, It was an
                absolute pleasure to partner with them.
              </p>
              <strong className="testimonial-name">Cak Dikin</strong>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="testimonial-2">
            <div className="testimonial-pic quote-right">
              <img src="images/testimonials/pic3.jpg" alt="" />
            </div>
            <div className="testimonial-text">
              <p>
                Really impressed with their customer handling ability. Glad to
                collaborate with you.
              </p>
              <strong className="testimonial-name">Cak Dikin</strong>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
}

export default FromClientSlider;
