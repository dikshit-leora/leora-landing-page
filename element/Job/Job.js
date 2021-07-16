function Job({ name, closingDate, description, ...rest }) {
  return (
    <div
      className="col-lg-4 col-md-6 wow fadeInUp"
      data-wow-duration="2s"
      data-wow-delay="0.2s"
      style={{ cursor: "pointer" }}
      {...rest}
    >
      <div className="icon-bx-wraper style-5 box-hover text-center m-b30">
        <div className="icon-content">
          <h4 className="dlab-title m-b15">{name}</h4>
          <p>{description}</p>
          {closingDate && <p>Apply Before {closingDate}</p>}
          <div className="btn btn-outline-primary">
            <i className="fa fa-angle-right" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Job;
