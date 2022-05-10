import { Box } from "@mui/material";
import React from "react";
import HeaderNav from "./HeaderNav";
import HeaderTop from "./HeaderTop";

const PageHeader = () => {
  return (
    <Box fontSize="15px">
      <HeaderTop />
      <HeaderNav />
    </Box>
  );
};

export default PageHeader;
