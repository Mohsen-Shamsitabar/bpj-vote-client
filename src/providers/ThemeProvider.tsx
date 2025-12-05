import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type ThemeMode = "light" | "dark";

type ThemeContextType = {
  mode: ThemeMode;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as ThemeMode) || "light";
    }

    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(mode === "dark" ? "light" : "dark");
    root.classList.add(mode);
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleTheme = () => setMode(mode === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};

export { ThemeProvider, useTheme };
