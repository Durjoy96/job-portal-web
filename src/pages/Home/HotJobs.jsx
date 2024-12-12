import { useEffect, useState } from "react";
import JobsCard from "./JobsCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {jobs.map((job) => (
          <JobsCard key={job._id} job={job}></JobsCard>
        ))}
      </div>
    </>
  );
};

export default HotJobs;
