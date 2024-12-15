import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const {
    title,
    company_logo,
    jobType,
    category,
    location,
    applicationDeadline,
    salaryRange,
    _id,
  } = useLoaderData();
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-5">
        <div className="mt-12">
          <h2 className="text-2xl font-semibold">
            <span className="font-bold">{title}</span> Job Details
          </h2>
          <div className="mt-12">
            <img src={company_logo} alt="" />
            <p>
              Job Type: <span className="font-semibold">{jobType}</span>
            </p>
            <p>
              Category: <span className="font-semibold">{category}</span>
            </p>
            <p>
              Location: <span className="font-semibold">{location}</span>
            </p>
            <p>
              Deadline :{" "}
              <span className="font-semibold">{applicationDeadline}</span>
            </p>
            <p>
              Salary Range :{" "}
              <span className="font-semibold">
                {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
              </span>
            </p>
            <Link to={`/job/${_id}/apply`} className="apply-btn">
              Apply
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
