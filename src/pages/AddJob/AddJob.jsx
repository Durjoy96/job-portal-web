import { useContext } from "react";
import { AuthContext } from "../../Context/Context";

const AddJob = () => {
  const { user } = useContext(AuthContext);
  const fromHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    // console.log(Object.fromEntries(formData.entries()));
    const initial = Object.fromEntries(formData.entries());
    const { min, max, currency, ...job } = initial;
    job.salaryRange = { min: Number(min), max: Number(max), currency };
    job.requirements = job.requirements.split(",");
    job.responsibilities = job.responsibilities.split(",");
    job.status = "active";
    job.hr_email = user?.email;
    job.hr_name = user?.displayName || "Anonymous";
    // console.log(job);
    form.reset();
    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(job),
    })
      .then((res) => res.json())
      // .then((data) => console.log(data));
  };
  return (
    <>
      <div className="main-container mt-12">
        <form
          onSubmit={fromHandler}
          className="p-12 rounded-xl bg-base-100 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-base-content border-b">
            Add a Job
          </h2>
          <div className="mt-8 space-y-4">
            {/* Job Title */}
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Job Title</span>
              </div>
              <input
                type="text"
                placeholder="Job Title"
                name="title"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            {/* Location */}
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Location</span>
              </div>
              <input
                type="text"
                placeholder="Location"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            {/* Job type */}
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Job Type</span>
              </div>
              <input
                type="text"
                placeholder="Job Type"
                name="jobType"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            {/* Category */}
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <select name="category" className="select select-bordered">
                <option selected>Engineering</option>
                <option>Full Stack dev</option>
                <option>Frontend dev</option>
                <option>Backend dev</option>
                <option>UI/UX designer</option>
                <option>Manager</option>
              </select>
            </label>
            {/* applicationDeadline */}
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Deadline</span>
              </div>
              <input
                type="date"
                placeholder=""
                name="applicationDeadline"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            {/* salaryRange */}
            <div className="flex gap-6 items-end">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Salary</span>
                </div>
                <input
                  type="number"
                  placeholder="Min"
                  name="min"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <input
                type="number"
                placeholder="Max"
                name="max"
                className="input input-bordered w-full max-w-xs"
              />
              <select name="currency" className="select select-bordered">
                <option selected>BDT</option>
                <option>USD</option>
                <option>ERU</option>
                <option>INR</option>
              </select>
            </div>
            {/* description */}
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <textarea
                name="description"
                className="textarea textarea-bordered"
                placeholder="Bio"
              ></textarea>
            </label>
            {/* requirements */}
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Requirements</span>
              </div>
              <input
                type="text"
                placeholder="eg. TailwindCss, JavaScript, React"
                name="requirements"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            {/* responsibilities */}
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Responsibilities</span>
              </div>
              <input
                type="text"
                placeholder="eg. Develop marketing strategies, Manage ad campaigns"
                name="responsibilities"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            {/* company_logo */}
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Company Logo URL</span>
              </div>
              <input
                type="text"
                placeholder="URL"
                name="company_logo"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
          </div>
          <button className="apply-btn  mt-12">Submit</button>
        </form>
      </div>
    </>
  );
};

export default AddJob;
