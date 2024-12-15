import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Context/Context";

const JobApply = () => {
  const params = useParams();
  const { user } = useContext(AuthContext);
  console.log(params.id);
  const formHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;
    const application = {
      job_id: params.id,
      candidate_email: user.email,
      linkedin: linkedin,
      github: github,
      resume: resume,
    };

    fetch("http://localhost:5000/job-applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(application),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <>
      <div className="main-container">
        <form
          onSubmit={formHandler}
          className="max-w-screen-sm p-12 rounded-xl bg-base-100 mx-auto mt-12 shadow-lg space-y-6"
        >
          <h2 className="text-3xl font-semibold text-neutral-900 text-center pb-6">
            Apply
          </h2>
          <label className="input input-bordered flex items-center gap-2">
            Linkedin URL
            <input
              type="text"
              className="grow"
              placeholder="Linkedin URL"
              name="linkedin"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            GitHub URL
            <input
              type="text"
              className="grow"
              placeholder="GitHub URL"
              name="github"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            Resume URL
            <input
              type="text"
              className="grow"
              placeholder="Resume URL"
              name="resume"
            />
          </label>
          <button className="apply-btn">Apply</button>
        </form>
      </div>
    </>
  );
};

export default JobApply;
