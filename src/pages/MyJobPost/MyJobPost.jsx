import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/Context";
import { Link } from "react-router-dom";

const MyJobPost = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  console.log(posts);
  return (
    <>
      <div className="overflow-x-auto main-container mt-12 bg-base-100 p-12 rounded-xl shadow-sm">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Category</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {posts.map((post, idx) => (
              <tr key={idx}>
                <th>{idx + 1}</th>
                <td>{post.title}</td>
                <td>{post.category}</td>
                <td>{post.status}</td>
                <td>
                  <Link
                    to={`/job-applications/job/${post._id}`}
                    className="link hover:text-primary"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyJobPost;
