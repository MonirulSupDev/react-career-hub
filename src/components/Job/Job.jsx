import { GrLocation } from "react-icons/gr";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div className="card bg-base-100 shadow-sm p-10">
      <figure className="flex justify-start rounded-none mb-8">
        <img src={logo} alt="Company logo" />
      </figure>
      <div className="card-body p-0 flex flex-col">
        <h2 className="card-title text-dark-2 font-bold text-2xl">
          {job_title}
        </h2>
        <h3 className="text-dark-3 text-xl font-semibold mb-2">
          {company_name}
        </h3>
        <div className="flex gap-3 mb-2">
          <span className="gradient-btn">
            <span className="gradient-text">{remote_or_onsite}</span>
          </span>
          <span className="gradient-btn">
            <span className="gradient-text">{job_type}</span>
          </span>
        </div>
        <div className="xl:flex gap-5 text-dark-3 text-sm md:text-xl font-semibold">
          <span className="flex items-center">
            <GrLocation />
            &nbsp;{location}
          </span>
          <span className="flex items-center">
            <AiOutlineDollar />
            &nbsp;Salary : {salary}
          </span>
        </div>
        <div className="card-actions mt-auto pt-4">
          <Link to={`/job/${id}`}>
            <button className="btn bg-linear-90 from-blue-500 to-violet-500 font-bold text-sm md:text-xl text-white px-4.5 py-6 rounded hover:cursor-pointer hover:bg-linear-180 hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 transition-all duration-300">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
