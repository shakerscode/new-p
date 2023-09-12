import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function MainLayout() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <Header setIsModalOpen={null} />}
      <div>
        <Outlet />
      </div>
      {location.pathname !== "/" && <Footer />}
    </div>
  );
}
