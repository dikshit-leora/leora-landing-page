import OfficesSlider from "../component/OfficeSlider";

function Offices() {
  return (
    <>
      <section className="content-inner">
        <div className="container">
          <div className="section-head style-1 text-center">
            <h6 className="sub-title bgl-primary m-b20 text-primary">
              OFFICES
            </h6>
            <h2 className="title">Our Offices are located at</h2>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <OfficesSlider />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Offices;
