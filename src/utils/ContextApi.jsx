import React from "react";

export const Context = React.createContext();

export const AppContext = (props) => {
    const [imageSearch, setImageSearch] = React.useState(false);
    const [darkMode, setDarkMode] = React.useState(false);

    return (
        <div>
            <Context.Provider value={{imageSearch, setImageSearch, darkMode, setDarkMode}}>
                {props.children}
            </Context.Provider>
        </div>
    );
};
