import { useEffect } from "react";
import Head from "next/head";
// import Pricing from "../element/pricing";
// import Blog from "../element/blog";
// import Testimonial from "../element/testimonial";
import Footer from "../layout/footer";
import Header from "../layout/header";
import Banner from "../element/Home/Banner";
import Clients from "../element/Home/Clients";
import Service from "../element/Home/Service";
import AboutUs from "../element/Home/AboutUs";
// import Counter from "../element/Home/Counter";
import Features from "../element/Home/Features";
// import Projects from "../element/Home/Projects";
// import Newsletter from "../element/Home/Newsletter";
// import Offices from "../element/Home/Offices";
import ContactUsForm from "../element/ContactUs/ContactUsForm";
// import Cta from "../element/Home/Cta";

function Home() {
  useEffect(() => {
    document.querySelector("body").setAttribute("color", "color_1");
  }, []);
  return (
    <>
      <Head>
        <title>Leora</title>
      </Head>
      <Header />
      <div className="page-content bg-white" id="top">
        <Banner />
        <Service />
        <AboutUs />
        {/* <Counter /> */}
        <Features />
        {/* <Projects /> */}
        {/* <Newsletter /> */}
        {/* <Offices /> */}
        <Clients />
        {/* <Pricing />
        <Testimonial />
        <Blog /> */}
        <ContactUsForm />
        {/* <Cta /> */}
      </div>
      <Footer />
    </>
  );
}

export default Home;
