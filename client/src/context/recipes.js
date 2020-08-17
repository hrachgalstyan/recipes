import React from "react";
import axios from "axios";

export const RecipesContext = React.createContext();

export default function RecipesProvider({ children }) {
    const [loading, setLoading] = React.useState(true);
    const [recipes, setRecipes] = React.useState([]);

    React.useEffect(() => {
      setLoading(true);
      axios.get(`/api/v1/recipes`).then(response => {
        setRecipes(response.data);
        setLoading(false);
      });
      return () => {};
    }, []);

    return (
        <RecipesContext.Provider
        value={{
            recipes,
            loading
        }}
        >
        {children}
        </RecipesContext.Provider>
    );
}