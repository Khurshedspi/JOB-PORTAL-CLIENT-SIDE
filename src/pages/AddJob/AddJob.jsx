import React from "react";

const AddJob = () => {
    const handleAddJob = e =>{
        e.preventDefault();
        const formData = new FormData(e.target);
        // console.log(formData.entries());
        const initialData = Object.fromEntries(formData.entries());
        // console.log(initialData);
        const {min, max, currency, ...newJob} = initialData;
        console.log(newJob);
        newJob.salaryRange = {min, max, currency}
        console.log(newJob);
    }
  return (
    <div>
      <form onSubmit={handleAddJob} className="card-body">
        {/* job-title  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            placeholder="Job-Title"
            name="title"
            className="input input-bordered"
            required
          />
        </div>
        {/* job-location  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <input
            type="text"
            placeholder="Job Location"
            name="location"
            className="input input-bordered"
            required
          />
        </div>
        {/* job-type  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select name="job_type" className="select select-ghost w-full max-w-xs">
            <option disabled selected>
              Pick a Job Type
            </option>
            <option>Full Time</option>
            <option>Inter</option>
            <option>Part-Time</option>
          </select>
        </div>
        {/* job-field  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Field</span>
          </label>
          <select name="job_field" className="select select-ghost w-full max-w-xs">
            <option disabled selected>
              Pick a Job Field
            </option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Receptionist</option>
          </select>
        </div>

        {/* salary-range  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Salary Range</span>
            </label>
            <input
              type="text"
              placeholder="Min"
              name="min"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Max"
              name="max"
              className="input input-bordered"
              required
            />
          </div>
          {/* Currency  */}

          <div className="form-control">
            <select name="currency" className="select select-ghost w-full max-w-xs">
              <option disabled selected>
                Currency
              </option>
              <option>BDT</option>
              <option>USD</option>
              <option>INR</option>
            </select>
          </div>
        </div>

        {/* Description  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>

          <textarea
            className="textarea textarea-bordered"
            placeholder="Job Description"
            name="description"
            required
          ></textarea>
        </div>

        {/* Company Name  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input
            type="text"
            placeholder="Company Name"
            name="company"
            className="input input-bordered"
            required
          />
        </div>

        {/* Requirements  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Requirements</span>
          </label>

          <textarea
            className="textarea textarea-bordered"
            placeholder="Put each Requirements in a new line"
            name="requirements"
            required
          ></textarea>
        </div>
        {/* Responsibility  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Responsibilities</span>
          </label>

          <textarea
            className="textarea textarea-bordered"
            placeholder="Put each Responsibility in a new line"
            name="responsibilities"
            required
          ></textarea>
        </div>

        {/* HR EMAIL  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR E-Mail</span>
          </label>
          <input
            type="email"
            placeholder="HR Email"
            name="hr_email"
            className="input input-bordered"
            required
          />
        </div>
        {/* HR NAME  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">HR Name</span>
          </label>
          <input
            type="text"
            placeholder="HR Name"
            name="hr_name"
            className="input input-bordered"
            required
          />
        </div>

        {/* company logo  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Logo URL</span>
          </label>
          <input
            type="url"
            placeholder="Company Logo URL"
            name="company_log"
            className="input input-bordered"
            required
          />
        </div>
        {/* submit button */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
