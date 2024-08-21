import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LanndingPage from "./pages/LanndingPage";

import { ChakraProvider } from "@chakra-ui/react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LanndingPage />} />
          <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
