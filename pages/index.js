import { useEffect } from "react";
import AboutUs from "../element/aboutUs";
import Clients from "../element/clients";
import Counter from "../element/counter";
import Cta from "../element/cta";
import Newsletter from "../element/newsletter";
import Features from "../element/our-features";
import Projects from "../element/projects";
import Quote from "../element/quote";
import Service from "../element/service";
import Slider2 from "../element/slider-2";
import Team from "../element/team";
// import Pricing from "../element/pricing";
// import Blog from "../element/blog";
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
        <Clients />
        <Service />
        <AboutUs />
        <Counter />
        <Features />
        <Projects />
        <Newsletter />
        <Team />
        {/* <Pricing />
        <Testimonial />
        <Blog /> */}
        <Quote />
        <Cta />
      </div>
      <Footer />
    </>
  );
}

export default Home;
