import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Bmi from "./pages/Bmi";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Daily from "./pages/Daily";
import IdealWeight from "./pages/IdealWeight";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="bmi" element={<Bmi />} />
          <Route path="daily" element={<Daily />} />
          <Route path="idealweight" element={<IdealWeight />} />

          <Route path="about" element={<About />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
