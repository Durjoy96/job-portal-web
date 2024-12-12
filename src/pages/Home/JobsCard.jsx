import { Link } from "react-router-dom";

const JobsCard = ({ job }) => {
  console.log(job);
  return (
    <>
      <div className="card bg-base-100 pt-6 shadow-xl">
        <figure>
          <img src={job.company_logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {job.company}
            <div className="badge badge-primary">NEW</div>
          </h2>
          <p>{job.description}</p>
          <div className="card-actions justify-end">
            {job.requirements.map((req, idx) => (
              <div key={idx} className="badge badge-outline">
                {req}
              </div>
            ))}
          </div>
          <div className="card-actions mt-3">
            <Link className="btn-link text-primary hover:opacity-70">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsCard;
