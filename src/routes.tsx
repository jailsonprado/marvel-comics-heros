import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./pages/Details";

import Home from "./pages/Home";
import { HookProvider } from "./context";

const RoutesManager = () => {
  return (
    <BrowserRouter>
      <HookProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comics/:id" element={<Details />} />
        </Routes>
      </HookProvider>
    </BrowserRouter>
  );
};

export default RoutesManager;
