import { Outlet, useNavigate } from "react-router-dom";
import Header from "../layouts/Header";
import CommonBlogHead from "../pages/Admin/components/Common/CommonBlogHead";
import { useEffect } from "react";

export default function AdminLayout() {
  const token = JSON.parse(localStorage.getItem("userToken"));
  const navigate = useNavigate();

// validating the user by token
 useEffect(()=>{
  if (!token) {
    navigate("/admin/auth");
  }
 },[token])

  return (
    <div>
      {token && (
        <>
          <Header />
          <div className="lg:max-w-[1280px] mx-auto">
        <div className="px-2">
        <div className="h-48 w-full flex justify-center flex-col items-center md:items-start lg:items-start rounded-md bg-slate-300 my-8 px-4">
              <h2 className="lg:text-4xl md:text-3xl text-2xl lg:ml-16 md:ml-16 justify-center items-center font-bold text-primary flex gap-2">
                Welcome back,
                <p className="lg:text-4xl md:text-3xl txt-2xl font-bold text-[#243499]">
                  Rvai
                </p>
              </h2>
              <p className="lg:ml-16 text-black text-md md:mt-2 lg:mt-2 mt-0">
                Start managing your blogs
              </p>
            </div>
        </div>
            <CommonBlogHead />
            <div className={"pt-4 px-4 z-10"}>
              <Outlet />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
