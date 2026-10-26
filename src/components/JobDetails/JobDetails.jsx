import { useLoaderData, useParams } from "react-router";
import shapeLeft from "../../assets/images/shapes/left-shape.png";
import shapeRight from "../../assets/images/shapes/right-shape.png";
import { AiOutlineDollar } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi2";
import { MdOutlineMail } from "react-icons/md";
import { VscLocation } from "react-icons/vsc";
import { ToastContainer, toast } from "react-toastify";
import {
  getStoredJobApplication,
  saveJobApplication,
} from "../../utility/localstorage";
import { Helmet } from "react-helmet-async";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);
  const job = jobs.find((job) => job.id === intId);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job;

  const handleApplyNow = () => {
    const storedApplyJobs = getStoredJobApplication();
    console.log(storedApplyJobs);
    if (storedApplyJobs.includes(intId)) {
      toast.info("You have applied for this job already!");
      return;
    }
    saveJobApplication(intId);
    toast.success("You have applied successfully!");
  };

  return (
    <div>
      <Helmet>
        <title>CareerHub | Job Details</title>
      </Helmet>
      <div className="relative left-1/2 w-screen -translate-x-1/2 bg-sky-50 pt-54 pb-46">
        <div className="mx-auto max-w-330">
          <h2 className="text-center text-[32px] font-extrabold">
            Job Details
          </h2>
        </div>
        <img src={shapeLeft} alt="Left Shape" className="absolute bottom-0" />
        <img
          src={shapeRight}
          alt="Right Shape"
          className="absolute top-0 right-0"
        />
      </div>
      <div className="grid grid-cols-12 gap-6 py-32.5">
        <div className="col-span-8">
          <p className="text-base mb-5">
            <span className="font-bold text-dark-1">Job Descriptions: </span>
            <span className="text-dark-3">{job_description}</span>
          </p>
          <p className="text-base mb-5">
            <span className="font-bold text-dark-1">Job Responsibility: </span>
            <span className="text-dark-3">{job_responsibility}</span>
          </p>
          <p className="text-base mb-5">
            <span className="font-bold text-dark-1 block mb-3">
              Educational Requirements:{" "}
            </span>
            <span className="text-dark-3 block">
              {educational_requirements}
            </span>
          </p>
          <p className="text-base">
            <span className="font-bold text-dark-1 block mb-3">
              Experiences:{" "}
            </span>
            <span className="text-dark-3 block">{experiences}</span>
          </p>
        </div>
        <div className="col-span-4">
          <div className="bg-sky-100 p-7.5 rounded-lg">
            <div className="mb-8">
              <h3 className="text-dark-1 text-xl font-bold">Job Details</h3>
              <div className="h-px gradient-bg opacity-30 my-6"></div>
              <p className="text-base font-medium flex mb-3">
                <span className="font-bold flex items-center text-dark-2">
                  <AiOutlineDollar className="text-indigo-600 size-5" />
                  &nbsp; Salary :
                </span>
                <span className="text-dark-3">&nbsp;{salary}(Per Month)</span>
              </p>
              <p className="text-base font-medium flex">
                <span className="font-bold flex items-center text-dark-2">
                  <IoCalendarOutline className="text-indigo-600 size-5" />
                  &nbsp; Job Title :
                </span>
                <span className="text-dark-3">&nbsp;{job_title}</span>
              </p>
            </div>
            <div>
              <h3 className="text-dark-1 text-xl font-bold">
                Contact Information
              </h3>
              <div className="h-px gradient-bg opacity-30 my-6"></div>
              <p className="text-base font-medium flex mb-3">
                <span className="font-bold flex items-center text-dark-2">
                  <HiOutlinePhone className="text-indigo-600 size-5" />
                  &nbsp; Phone :&nbsp;
                </span>
                <a
                  href={`tel:${contact_information.phone}`}
                  className="text-dark-3"
                >
                  {contact_information.phone}
                </a>
              </p>
              <p className="text-base font-medium flex mb-3">
                <span className="font-bold flex items-center text-dark-2">
                  <MdOutlineMail className="text-indigo-600 size-5" />
                  &nbsp; Email :&nbsp;
                </span>
                <a
                  href={`mailto:${contact_information.email}`}
                  className="text-dark-3"
                >
                  {contact_information.email}
                </a>
              </p>
              <div className="flex items-start text-base font-medium">
                <span className="flex shrink-0 items-center font-bold text-dark-2">
                  <VscLocation className="size-5 text-indigo-600" />
                  &nbsp; Address:
                </span>

                <span className="min-w-0 text-dark-3">
                  &nbsp;{contact_information.address}
                </span>
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={handleApplyNow}
              className="btn bg-linear-90 from-blue-500 to-violet-500 font-bold text-xl text-white w-full py-[31.5px] rounded-lg hover:bg-linear-180 hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0 transition-all duration-300 mt-8"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default JobDetails;
