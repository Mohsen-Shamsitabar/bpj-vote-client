import { useTheme } from "@mui/material";

const useBpjLogo = () => {
  const theme = useTheme();

  const isDarkMode = theme.palette.mode === "dark";

  const imagePath = isDarkMode
    ? "/images/logo-white.png"
    : "/images/logo-black.png";

  return (
    <img
      src={imagePath}
      alt="bpj-logo"
    />
  );
};

export default useBpjLogo;
