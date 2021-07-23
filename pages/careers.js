import Link from "next/link";
import Header from "../layout/header";
import Job from "../element/Job/Job";
import { Modal } from "react-bootstrap";
import { useState } from "react";
import JobForm from "../element/Job/JobForm";
import Footer from "../layout/footer";

function Careers() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && (
        <Modal show={open} onHide={() => setOpen(false)} animation>
          <JobForm />
        </Modal>
      )}
      <Header />
      <div className="page-content bg-white">
        {/* <!-- Banner  --> */}
        <div
          className="dlab-bnr-inr overlay-primary-dark"
          style={{ backgroundImage: "url(images/banner/bnr1.jpg)" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1>Careers</h1>
              {/* <!-- Breadcrumb Row --> */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Careers
                  </li>
                </ul>
              </nav>
              {/* <!-- Breadcrumb Row End --> */}
            </div>
          </div>
        </div>

        <section className="content-inner">
          <div className="container">
            <div className="section-head style-3 text-center mb-4">
              <h2 className="title">GROW WITH US</h2>
              <div className="dlab-separator style-2 bg-primary"></div>
              <h4>“ONLY TALENT MATTERS HERE”</h4>
            </div>
            <div className="row">
              <Job
                description="Job Description"
                onClick={() => setOpen(true)}
                name="Web Development"
                closingDate="09/12/2021"
              />
              <Job
                description="Job Description"
                onClick={() => setOpen(true)}
                name="App Development"
                closingDate="09/12/2021"
              />
              <Job
                description="Job Description"
                onClick={() => setOpen(true)}
                name="Graphic Designing"
                closingDate="09/12/2021"
              />
              <Job
                description="Job Description"
                onClick={() => setOpen(true)}
                name="UI / UX"
                closingDate="09/12/2021"
              />
              <Job
                description="Job Description"
                onClick={() => setOpen(true)}
                name="QA"
                closingDate="09/12/2021"
              />
              <Job
                description="Job Description"
                onClick={() => setOpen(true)}
                name="Dev Ops"
                closingDate="09/12/2021"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Careers;
