import { useEffect, useState } from "react";
import JobCategory from "../JobCategory/JobCategory";

const CategoryList = () => {
  const [jobCategories, setJobCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setJobCategories(data));
  }, []);
  return (
    <div className="overflow-hidden pt-15 md:pt-32.5 px-2 xl:px-0">
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-dark-1">
          Job Category List
        </h2>
        <p className="font-medium text-dark-3 mt-5">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
        {jobCategories.map((jobCategory) => (
          <JobCategory
            key={jobCategory.id}
            jobCategory={jobCategory}
          ></JobCategory>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
