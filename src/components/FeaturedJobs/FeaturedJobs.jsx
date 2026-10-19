import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const [dataLength, setDataLength] = useState(4);
  return (
    <div className="py-15 md:py-32.5 px-2 md:px-0">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-dark-1">
          Featured Jobs
        </h2>
        <p className="font-medium text-dark-3 mt-5">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-8">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div
        className={
          dataLength === jobs.length ? "hidden" : "flex justify-center mt-10"
        }
      >
        <a
          onClick={() => setDataLength(jobs.length)}
          className="btn bg-linear-90 from-blue-500 to-violet-500 font-bold text-xl text-white px-5.75 py-[31.5px] rounded-lg hover:bg-linear-180 hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 transition-all duration-300"
        >
          See All Jobs
        </a>
      </div>
    </div>
  );
};

export default FeaturedJobs;
