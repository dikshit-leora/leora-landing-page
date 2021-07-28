import Slider from "react-slick";

function ClientSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    speed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>
        <div className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="images/clients/AIDMMK_LOGO.png"
              alt=""
            />
            <img
              className="logo-hover"
              src="images/clients/AIDMMK_LOGO.png"
              alt=""
            />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img className="logo-main" src="images/clients/ALEC.png" alt="" />
            <img className="logo-hover" src="images/clients/ALEC.png" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img className="logo-main" src="images/clients/avitis.png" alt="" />
            <img
              className="logo-hover"
              src="images/clients/avitis.png"
              alt=""
            />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="images/clients/bronsky.png"
              alt=""
            />
            <img
              className="logo-hover"
              src="images/clients/bronsky.png"
              alt=""
            />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="images/clients/Businesscare.png"
              alt=""
            />
            <img
              className="logo-hover"
              src="images/clients/Businesscare.png"
              alt=""
            />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img className="logo-main" src="images/clients/DMCC.png" alt="" />
            <img className="logo-hover" src="images/clients/DMCC.png" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="images/clients/galdari.png"
              alt=""
            />
            <img
              className="logo-hover"
              src="images/clients/galdari.png"
              alt=""
            />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img className="logo-main" src="images/clients/HH.png" alt="" />
            <img className="logo-hover" src="images/clients/HH.png" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="images/clients/holycrosscalicut.png"
              alt=""
            />
            <img
              className="logo-hover"
              src="images/clients/holycrosscalicut.png"
              alt=""
            />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="images/clients/karuna_medical_college.png"
              alt=""
            />
            <img
              className="logo-hover"
              src="images/clients/karuna_medical_college.png"
              alt=""
            />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="images/clients/maktoomlogo.png"
              alt=""
            />
            <img
              className="logo-hover"
              src="images/clients/maktoomlogo.png"
              alt=""
            />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img className="logo-main" src="images/clients/OTF.png" alt="" />
            <img className="logo-hover" src="images/clients/OTF.png" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img
              className="logo-main"
              src="images/clients/prime_hospital-.png"
              alt=""
            />
            <img
              className="logo-hover"
              src="images/clients/prime_hospital-.png"
              alt=""
            />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img className="logo-main" src="images/clients/raha.png" alt="" />
            <img className="logo-hover" src="images/clients/raha.png" alt="" />
          </div>
        </div>
        <div className="item">
          <div className="clients-logo">
            <img className="logo-main" src="images/clients/TDL.png" alt="" />
            <img className="logo-hover" src="images/clients/TDL.png" alt="" />
          </div>
        </div>
      </Slider>
    </>
  );
}

export default ClientSlider;
