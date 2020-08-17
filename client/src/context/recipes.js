import React from "react";
import axios from "axios";

export const RecipesContext = React.createContext();

export default function RecipesProvider({ children }) {
    const [loading, setLoading] = React.useState(true);
    const [recipes, setRecipes] = React.useState([]);

    React.useEffect(() => {
      setLoading(true);
      axios({
        url: 'api/v1/recipes?page=1&limit=4',
        method: 'GET',
      })
        .then((response) => {
          setRecipes(response.data.data.data);
          setLoading(false);
        })
        .catch((err) => console.log(err.response));
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