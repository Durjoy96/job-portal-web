import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/Context";
import axios from "axios";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";

const MySubmission = () => {
  const { user } = useContext(AuthContext);
  const [submissions, setSubmissions] = useState([]);
  const axiosSecure = UseAxiosSecure();

  useEffect(() => {
    /*     fetch(`http://localhost:5000/job-applications/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setSubmissions(data)); */
    axiosSecure
      .get(`/job-applications/${user?.email}`)
      .then((res) => setSubmissions(res.data));
  }, []);

  // console.log(submissions, console.log(user.email));
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Company Name</th>
              <th>Job</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {submissions.map((submission, idx) => (
              <>
                <tr key={idx}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={submission.company_logo} alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{submission.company}</div>
                        <div className="text-sm opacity-50">
                          {submission.location}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {submission.title}
                    <br />
                    <span className="badge badge-ghost badge-sm max-w-xs">
                      {submission.description}
                    </span>
                  </td>
                  <td>{submission.category}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MySubmission;
