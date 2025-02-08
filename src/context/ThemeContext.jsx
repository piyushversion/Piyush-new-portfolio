import { createContext,useEffect,useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const[theme,setTheme] = useState("light");

    useEffect(()=>{

        if(theme === "dark"){

            document.documentElement.classList.add("dark");

        }else{

            document.documentElement.classList.remove("dark");
        }

    },[theme])

    const toggleTheme = () => {

        setTheme(theme === "dark" ? "light" : "dark");

    }

    return(

        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}