
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../Firebase/firebase.config";
import Loading from "../pages/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <p className="text-red-500">Error: {error.message}</p>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="flex items-center">
        <div className="h-0.5 bg-primary w-1/2"></div>
        <p className="mt-3 px-3">Or</p>
        <div className="h-0.5 bg-primary w-1/2"></div>
      </div>

      <div className="mb-4">
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-danger block w-50 mx-auto"
        >
          <i className="fab fa-google"></i> &nbsp; Google Sign In
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
