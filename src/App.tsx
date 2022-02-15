import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Admin from "./pages/Admin";
import Home from "./pages/Home";

const App = () => (
  <RecoilRoot>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </RecoilRoot>
);

export default App;
