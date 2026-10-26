import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredJobApplication } from "../../utility/localstorage";
import shapeLeft from "../../assets/images/shapes/left-shape.png";
import shapeRight from "../../assets/images/shapes/right-shape.png";
import AppliedJob from "../AppliedJob/AppliedJob";
import { Helmet } from "react-helmet-async";

const AppliedJobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);

  const [displayJobs, setDisplayJobs] = useState([]);

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote",
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite",
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  return (
    <div>
      <Helmet>
        <title>CareerHub | Applied Jobs</title>
      </Helmet>
      <div className="relative left-1/2 w-screen -translate-x-1/2 bg-sky-50 pt-54 pb-46">
        <div className="mx-auto max-w-330">
          <h2 className="text-center text-[32px] font-extrabold">
            Applied Jobs
          </h2>
        </div>
        <img src={shapeLeft} alt="Left Shape" className="absolute bottom-0" />
        <img
          src={shapeRight}
          alt="Right Shape"
          className="absolute top-0 right-0"
        />
      </div>
      <div className="grid gap-6 py-32.5">
        <div className="flex justify-end">
          <div class="relative inline-flex items-center rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-xs transition-all duration-300 hover:border-indigo-400">
            <select
              onChange={(e) => handleJobsFilter(e.target.value)}
              className="cursor-pointer appearance-none bg-transparent pr-7 text-sm font-medium text-gray-700 outline-none"
              aria-label="Filter By"
              name="job-filter"
            >
              <option value="" selected disabled>
                Filter By
              </option>
              <option value="all">All</option>
              <option value="remote">Remote</option>
              <option value="onsite">Onsite</option>
            </select>

            <svg
              class="pointer-events-none absolute right-3 size-4 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="m19 9-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        {displayJobs.map((appliedJob) => (
          <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
