import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { Appearance, useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"; // You'll need to install this package

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => Promise<void>
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children} : {children: ReactNode}) => {
const systemColorScheme = useColorScheme();
const [theme, setTheme] = useState<Theme>(systemColorScheme || "light");

useEffect(() => {
    const loadTheme = async () => {
        try {
            const savedTheme = await AsyncStorage.getItem("userTheme") as Theme | null;
            if (savedTheme) {
                setTheme(savedTheme);
            } else if (systemColorScheme) {
                setTheme(systemColorScheme);
            }
        } catch (error) {
            console.error("Failed to load theme:", error);
        }
    }
    loadTheme();
}, [systemColorScheme]);

const toggleTheme = async () => {
  const newTheme = theme === "light" ? "dark" : "light";
  setTheme(newTheme);
try {
    // Save the users preferance
    await AsyncStorage.setItem("userTheme", newTheme)
} catch (error) {
    console.error("Failed to save theme:", error);
}
};

return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
    {children}
    </ThemeContext.Provider>
);
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}