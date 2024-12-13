import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { _id, title, deadline, company } = useLoaderData();

  return (
    <div className="card bg-primary text-primary-content w-96">
      <div className="card-body">
        <h2 className="card-title">{company}</h2>
        <p>{title}</p>
        {deadline}
        <div className="card-actions justify-center mt-4">
          <Link to={`/jobApply/${_id}`}>
            <button className="btn">Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
