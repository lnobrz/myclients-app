import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Loader = () => {
  return (
    <Box
      sx={{
        height: "calc(100vh - 60px - 300px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loader;
