import { AiOutlineDollar } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router";

const AppliedJob = ({ appliedJob }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = appliedJob;
  return (
    <div className="card card-side items-center bg-base-100 shadow-sm p-7.5">
      <figure className="bg-dark-7 size-60 flex items-center justify-center rounded-lg p-12">
        <img src={logo} alt="Company logo" className="h-auto" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl text-dark-2 font-extrabold">
          {job_title}
        </h2>
        <h3 className="text-2xl font-semibold text-dark-3">{company_name}</h3>
        <div className="flex gap-3 mb-2">
          <span className="gradient-btn">
            <span className="gradient-text">{remote_or_onsite}</span>
          </span>
          <span className="gradient-btn">
            <span className="gradient-text">{job_type}</span>
          </span>
        </div>
        <div className="flex gap-5 text-dark-3 text-xl font-semibold">
          <span className="flex items-center">
            <GrLocation />
            &nbsp;{location}
          </span>
          <span className="flex items-center">
            <AiOutlineDollar />
            &nbsp;Salary : {salary}
          </span>
        </div>
      </div>
      <div>
        <Link to={`/job/${id}`}>
          <button className="btn bg-linear-90 from-blue-500 to-violet-500 font-bold text-xl text-white px-4.5 py-6 rounded hover:cursor-pointer hover:bg-linear-180 hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 transition-all duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AppliedJob;
