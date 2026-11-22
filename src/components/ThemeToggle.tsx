import { useTheme } from "../hooks/useTheme";
export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(theme === "light" ? "dark" : "light")
      }
    >
      Vaheta teemat
    </button>
  );
};