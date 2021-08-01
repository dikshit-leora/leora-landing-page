import FromClientSlider from "./fromClientSlider";

function FromClient() {
  return (
    <>
      <section
        className="content-inner-1 bg-gray"
        style={{ backgroundImage: "url(images/background/bg3.png)" }}
      >
        <div className="container">
          <div className="section-head style-3 text-center">
            <h2 className="title">HEAR FROM OUR CLIENT</h2>
            <div className="dlab-separator style-2 bg-primary"></div>
          </div>
          <FromClientSlider />
        </div>
      </section>
    </>
  );
}

export default FromClient;
