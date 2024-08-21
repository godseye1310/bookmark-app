import React, { createContext, useState, useContext, useEffect } from "react";

// Create the ThemeContext with default value 'light'
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("light"); // Initialize theme state to 'light'

	// Function to toggle between 'light' and 'dark' themes
	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	// Apply the theme to the document body when the theme state changes
	useEffect(() => {
		document.body.setAttribute("data-theme", theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
