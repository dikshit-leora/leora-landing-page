// import ReCAPTCHA from "react-google-recaptcha";

import { useState } from "react";

// function onChange(value) {
//   console.log("Captcha value:", value);
// }

function ContactUsForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const changeHandler = ({ target: { name, value } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    document.location.href =
      "mailto:sales@leora.ae?subject=" +
      encodeURIComponent(formData.email ? `Email from ${formData.email}` : "") +
      "&body=" +
      encodeURIComponent(`
        Name: ${formData.firstName || ""} ${formData.lastName || ""},\n
        Email: ${formData.email || ""},\n
        Phone Number: ${formData.phone || ""},\n
        service: ${formData.service || ""},\n
        message: ${formData.message || ""}\n
        `);
  };

  return (
    <>
      <section
        className="content-inner"
        style={{ backgroundImage: "url(images/background/bg1.png)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-7 m-b30 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="section-head style-1">
                <h6 className="sub-title bgl-primary m-b20 text-primary">
                  Contact Us
                </h6>
                <h2 className="title">
                  We Love To Help Great Companies To Enlarge Their Revenues.
                </h2>
              </div>
              <form className="dlab-form dzForm" onSubmit={onSubmit}>
                <div className="dzFormMsg"></div>
                <input
                  type="hidden"
                  className="form-control"
                  name="dzToDo"
                  value="Contact"
                />
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="la la-user"></i>
                        </span>
                      </div>
                      <input
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={changeHandler}
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="la la-user"></i>
                        </span>
                      </div>
                      <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={changeHandler}
                        type="text"
                        className="form-control"
                        required
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="la la-envelope"></i>
                        </span>
                      </div>
                      <input
                        name="email"
                        value={formData.email}
                        onChange={changeHandler}
                        type="text"
                        required
                        className="form-control"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="la la-phone"></i>
                        </span>
                      </div>
                      <input
                        name="phone"
                        value={formData.phone}
                        onChange={changeHandler}
                        type="number"
                        required
                        className="form-control"
                        placeholder="Phone No."
                      />
                    </div>
                  </div>
                  {/* <div className="col-sm-6">
										<div className="input-group">
											<div className="input-group-prepend">
												<span className="input-group-text"><i className="la la-file-alt"></i></span>
											</div>
											<input name="dzOther[project_title]" type="text" className="form-control" required placeholder="Project Title" />
										</div>
									</div> */}
                  <div className="col-sm-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="la la-list"></i>
                        </span>
                      </div>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={changeHandler}
                        className="form-control"
                        required
                      >
                        <option selected>Choose Service</option>
                        <option value="Web App Development">
                          Web App Development
                        </option>
                        <option value="Mobile App Development">
                          Mobile App Development
                        </option>
                        <option value="IT Consulting">IT Consulting</option>
                        <option value="Custom ERP Development">
                          Custom ERP Development
                        </option>
                        <option value="UI / UX">UI / UX</option>
                        <option value="Graphic Designing">
                          Graphic Designing
                        </option>
                        <option value="Digital Marketing And Branding">
                          Digital Marketing And Branding
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="la la-sms"></i>
                        </span>
                      </div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={changeHandler}
                        required
                        className="form-control"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                  {/* <div className="col-sm-12">
                    <div className="input-group">
                      <div
                        className="g-recaptcha"
                        data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                        data-callback="verifyRecaptchaCallback"
                        data-expired-callback="expiredRecaptchaCallback"
                      ></div>
                      <input
                        className="form-control d-none"
                        style={{ display: "none" }}
                        data-recaptcha="true"
                        required
                        data-error="Please complete the Captcha"
                      />
                    </div>
                  </div> */}
                  {/* <ReCAPTCHA
                    sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN"
                    onChange={onChange}
                  /> */}
                  <div className="col-sm-12 mt-2">
                    <button
                      name="submit"
                      type="submit"
                      value="Submit"
                      className="btn btn-link d-inline-flex align-items-center"
                    >
                      <i className="fa fa-angle-right m-r10"></i>Submit Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div
              className="col-xl-6 col-lg-5 m-b30 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div className="dlab-media cf-r-img">
                <img src="images/about/img2.png" className="move-1" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUsForm;
