import { useEffect } from "react";
// import AboutUs from "../element/aboutUs";
// import Blog from "../element/blog";
import Clients from "../element/clients";
import Counter from "../element/counter";
import Cta from "../element/cta";
// import Newsletter from "../element/newsletter";
// import Features from "../element/our-features";
// import Pricing from "../element/pricing";
import Projects from "../element/projects";
// import Quote from "../element/quote";
import Service from "../element/service";
import Slider2 from "../element/slider-2";
import Offices from "../element/Offices.js";
// import Testimonial from "../element/testimonial";
import Footer from "../layout/footer";
import Header from "../layout/header";
function Home() {
  useEffect(() => {
    document.querySelector("body").setAttribute("color", "color_1");
  }, []);
  return (
    <>
      <Header />
      <div className="page-content bg-white" id="top">
        <Slider2 />
        {/* Who We are  */}
        <Cta />
        <Clients />
        <Service />
        <Counter />
        {/* <AboutUs /> */}
        {/* <Features /> */}
        <Projects />
        {/* <Newsletter /> */}
        <Offices />
        {/* <Pricing />
        <Testimonial />
        <Blog />
        <Quote /> */}
      </div>
      <Footer />
    </>
  );
}

export default Home;
