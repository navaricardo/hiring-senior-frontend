import { Route, Routes } from "react-router-dom";
import CreateInvoice from "./pages/CreateInvoice";
import Home from "./pages/Home";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/create-invoice" element={<CreateInvoice />} />
  </Routes>
);

export default App;
