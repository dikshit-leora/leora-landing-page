import { useRef, useState } from "react";

const JobForm = (props) => {
  const cvRef = useRef();
  const [data, setData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    cv: null,
  });

  const handleCvChange = (event) => {
    const { files } = event.target;
    if (files && files[0]) {
      setData((prev) => ({
        ...prev,
        cv: { file: files[0], name: files[0].name },
      }));
      console.log(files[0].name, files[0]);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!data.cv) {
      alert("Please Upload Your CV");
    } else {
      console.log(data);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="dlab-form dzForm"
      style={{ padding: 20 }}
    >
      <div className="dzFormMsg">Fill Your Details</div>
      <br />
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
              name="name"
              type="text"
              required
              className="form-control"
              placeholder="Name"
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
              type="email"
              className="form-control"
              required
              placeholder="Email"
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
              name="mobile"
              type="tel"
              required
              className="form-control"
              placeholder="Mobile"
            />
          </div>
        </div>
        <input
          accept=".doc, .docx, .pdf"
          style={{ display: "none" }}
          type="file"
          ref={cvRef}
          onChange={handleCvChange}
          value=""
        />
        <div className="col-sm-12 mt-2">
          {data.cv && <p>{data.cv.name}</p>}
          <button
            type="button"
            class="btn btn-primary btn-block"
            onClick={() => cvRef.current.click()}
          >
            Upload CV
          </button>
        </div>

        <div
          className="d-flex flex-center"
          style={{ width: "100%", marginTop: 10 }}
        >
          <button
            type="submit"
            class="btn btn-secondary"
            style={{ margin: "auto" }}
          >
            Apply
          </button>
        </div>
      </div>
    </form>
  );
};

export default JobForm;
