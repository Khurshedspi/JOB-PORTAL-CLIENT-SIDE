import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const {title, deadline, company } = useLoaderData();

  return (
    <div className="card bg-primary text-primary-content w-96">
      <div className="card-body">
        <h2 className="card-title">{company}</h2>
        <p>{title}</p>
        {deadline}
        <div className="card-actions justify-center mt-4">
          <button className="btn">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
