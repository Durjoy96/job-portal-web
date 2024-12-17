import { useLoaderData } from "react-router-dom";

const ShowCandidates = () => {
  const candidatesDetails = useLoaderData();
  console.log(candidatesDetails);
  const statusOptionHandler = (e, id) => {
    const status = { status: e.target.value };
    fetch(`http://localhost:5000/job-applications/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(status),
    })
      .then((res) => res.json())
      // .then((data) => console.log(data));
  };
  return (
    <>
      <div className="overflow-x-auto main-container p-12 rounded-xl bg-base-100 mt-12">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Resume</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {candidatesDetails.map((candidate, idx) => (
              <tr>
                <th>{idx + 1}</th>
                <td>{candidate.candidate_email}</td>
                <td>{candidate.resume}</td>
                <select
                  onChange={(e) => statusOptionHandler(e, candidate._id)}
                  className="select w-full max-w-xs"
                >
                  <option selected>{candidate.status}</option>
                  <option>Select</option>
                  <option>Interview</option>
                  <option>Hire</option>
                  <option>Reject</option>
                </select>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShowCandidates;
