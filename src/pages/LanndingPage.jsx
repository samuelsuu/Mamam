import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Box } from "@chakra-ui/react";

function LanndingPage() {
  return (
    <Box>
      <Box>
        <Navbar />
        <Hero />
      </Box>

      <Footer />
    </Box>
  );
}

export default LanndingPage;
