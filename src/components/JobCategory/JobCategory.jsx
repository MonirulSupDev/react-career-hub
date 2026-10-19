const JobCategory = ({ jobCategory }) => {
  const { logo, category_name, availability } = jobCategory;
  return (
    <div className="card bg-sky-50 shadow-sm p-10 rounded-lg">
      <figure className="flex justify-start mb-6 rounded-none">
        <span className="p-5 bg-sky-100 rounded-lg">
          <img src={logo} alt="Job Category logo" />
        </span>
      </figure>
      <div className="card-body p-0">
        <h2 className="card-title text-xl text-dark-2 font-bold">
          {category_name}
        </h2>
        <p className="text-[#A3A3A3] text-base">{availability}</p>
      </div>
    </div>
  );
};

export default JobCategory;
