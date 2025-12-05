import { useTheme } from "@/providers/ThemeProvider.tsx";

const useBpjLogo = () => {
  const theme = useTheme();

  const isDarkMode = theme.mode === "dark";

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
