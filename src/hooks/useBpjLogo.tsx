const useBpjLogo = () => {
  // const theme = useTheme();

  // const isDarkMode = theme.mode === "dark";
  const isDarkMode = true;

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
