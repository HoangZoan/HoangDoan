import { Box } from "@mui/material";
import React from "react";
import logo from "../../../assets/images/header-logo.png";

const HeaderTop = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "primary.main",
          py: "10px",
        }}
      >
        <span className="tx-white">
          Suspendisse laoreet magna vel diam lobortis imperdiet
        </span>
      </Box>

      <Box textAlign="center" sx={{ py: "32px" }}>
        <img src={logo} alt="Company Logo" />
      </Box>
    </>
  );
};

export default HeaderTop;
