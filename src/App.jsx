import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css";
import MainLayout from "./layouts/MainLayout";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <MainLayout />
    </div>
  );
}

export default App;
