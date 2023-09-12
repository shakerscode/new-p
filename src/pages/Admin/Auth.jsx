import { useEffect, useState } from "react";
import {
  useAdminLoginMutation,
  useValidTokenMutation,
} from "../../redux/api/apiSlice";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [adminId, setAdminId] = useState(null);
  const [password, setPassword] = useState(null);
  const [errors, setErrors] = useState({});
  const [isAuthError, setIsAuthError] = useState(null);
  const [adminLogin, { data, isLoading }] = useAdminLoginMutation();
  const [validToken] = useValidTokenMutation();
  const navigate = useNavigate();

  //if we get the token from the backend, we immediately set the token to the local storage so that user don't need to log in every time they visit.
  if (data && data.token) {
    localStorage.setItem("userToken", JSON.stringify(data.token));
  }


  //Double checking the user if he/she is the one. Simply sending the token to the backend sand verifying it there.
  const verify = async () => {
    try {
      const response = await validToken();
      const isValid = response?.data?.status === true;
      if (isValid) {
        navigate("/admin");
      }
    } catch (error) {
      console.error("Error validating token:", error);
    }
  };


  useEffect(() => {
    if (data?.token) {
      verify();
    }
  }, [data?.token]);

  const handleAdminIdChange = (event) => {
    setAdminId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  //Form submit for login to as an admin
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate input
    const newErrors = {};
    if (!adminId) {
      newErrors.adminId = "Admin id is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } 

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const response = await adminLogin({ adminId, password });
      const isError = response?.error?.data?.message;
      if (isError) {
        setIsAuthError(isError);
        setErrors({});
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh] w-full p-4 md:p-0 lg:p-0">
      <div className="bg-white shadow-xl p-5 rounded-xl border-[1px] border-solid border-gray-200 w-[500px] h-[400px]">
        <h2 className="text-md md:text-2xl lg:text-2xl font-bold text-[#243499]">
          Admin Login
        </h2>
        <div className="h-[1px] bg-gray-100 my-1"></div>
        <div className="flex justify-center items-center h-[80%] flex-col">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 w-full md:w-[80%] lg:w-[80%]"
          >
            <div className="flex justify-start flex-col items-start gap-1">
              <label htmlFor="" className="text-sm text-gray-600">
                Admin id
              </label>
              <input
                onChange={handleAdminIdChange}
                placeholder="Enter your admin id"
                type="text"
                className="w-full h-12 border-[1px] border-solid border-gray-300 rounded-md outline-offset-0 outline-none focus:ring-[1px] focus:ring-[#ffffff] placeholder-gray-300::placeholder text-[13px]"
              />
              {errors.adminId && (
                <p className="text-red-500 text-sm">{errors.adminId}</p>
              )}
            </div>
            <div className="flex justify-start flex-col items-start gap-1">
              <label htmlFor="" className="text-sm text-gray-600">
                Password
              </label>
              <input
                onChange={handlePasswordChange}
                placeholder="Enter your admin password"
                type="password"
                className="w-full h-12 placeholder-gray-300::placeholder text-[13px] border-[1px] border-solid border-gray-300 rounded-md outline-offset-0 outline-none focus:ring-[1px] focus:ring-[#ffffff]"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
            {isAuthError && (
              <p className="text-red-500 text-sm">{isAuthError}</p>
            )}
            <div className="mx-auto">
              <button
                type="submit"
                className="py-[8px] px-[18px] text-sm bg-[#243499] text-white rounded-md font-bold border-[1px] border-solid border-[#243499] hover:bg-white hover:text-[#243499] ml-2 transition ease-in-out delay-450"
              >
                {isLoading ? "Loading..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;
