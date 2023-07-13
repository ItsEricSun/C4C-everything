import { Box } from "@chakra-ui/react";
import backgroundSvg from "./poly-grid.svg";

const Background = () => {
  return (
    <Box position="fixed" top={0} left={0} width="100vw" height="100vh" zIndex={-1}>
      <img src={backgroundSvg} alt="Background" style={{ width: "100%", height: "100%", objectFit: "cover" }}/>
    </Box>
  );
};

export default Background;