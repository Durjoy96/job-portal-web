import Lottie from "lottie-react";
import RegisterIcon from "../../../assets/LottieIcons/register.json";
import { useContext } from "react";
import { AuthContext } from "../../../Context/Context";

const Register = () => {
  const { registerWithEmail } = useContext(AuthContext);

  const formHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    registerWithEmail(email, password)
      .then((res) => console.log(res))
      .catch((error) => console.log(error.message));
  };
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse lg:justify-between w-full">
          <div className="text-center w-[600px]">
            <Lottie animationData={RegisterIcon}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={formHandler} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-primary text-primary-content hover:bg-primary hover:opacity-70">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
