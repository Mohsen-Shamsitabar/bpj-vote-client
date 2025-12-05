import { Button } from "@/components/ui/button.tsx";
import { useTheme } from "@/providers/ThemeProvider.tsx";

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      onClick={toggleTheme}
      variant="outline"
    >
      Switch to {theme === "light" ? "dark" : "light"} mode
    </Button>
  );
};

export default ThemeSwitcher;
