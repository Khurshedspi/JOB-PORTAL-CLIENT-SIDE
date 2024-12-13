import { desc } from "motion/react-client";
import React from "react";
import { FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";

const HotJobCard = ({ job }) => {
  const {title, company, company_logo, requirements, description, location, salaryRange} = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
    <div className="flex gap-2 m-2">
    <figure>
        <img
        className="w-16"
          src={company_logo}
          alt={title}
        />
      </figure>
      <div>
        <h2 className="card-title">{company}</h2>
        <h2 className="text-sm font-semibold flex gap-2 items-center"><FaMapMarkerAlt></FaMapMarkerAlt> {location}</h2>

      </div>
    </div>
      <div className="card-body">
        <h2 className="card-title">{title} <div className="badge badge-secondary">New</div> </h2>
        <p>{description}</p>
        <div className="flex gap-2 flex-wrap">
            {
                requirements.map(skill =><p className="border rounded-md text-center px-2 hover:text-pink-600 hover:bg-gray-400">{skill}</p>)
            }
        </div>
        <div className="card-actions justify-end items-center mt-4">
            <p className="flex items-center"><FaDollarSign></FaDollarSign> Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
          <button className="btn btn-primary">Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default HotJobCard;
