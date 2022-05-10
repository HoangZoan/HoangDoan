import { Box, styled } from "@mui/material";
import React from "react";

import banner from "../../assets/images/banner-bg.jpg";

const HeroCardLayout = styled(Box)({
  width: "100px",
  height: "100px",
  backgroundColor: "rgba(250,250,250,0.9)",
  position: "absolute",
  top: "50%",
  left: "15%",
  transform: "translateY(-50%)",
  padding: "30px",
});

const Hero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${banner})`,
        height: "620px",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <HeroCardLayout>abc</HeroCardLayout>
    </Box>
  );
};

export default Hero;
