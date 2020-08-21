import React from "react";
import axios from "axios";

export const RecipesContext = React.createContext();

export default function RecipesProvider({ children }) {
    const [loading, setLoading] = React.useState(true);
    const [recipes, setRecipes] = React.useState([]);
    const [page, setPage] = React.useState(1)

    React.useEffect(() => {
      setLoading(true);
      axios({
        url: `api/v1/recipes?page=${page}&limit=5`,
        method: 'GET',
      })
        .then((response) => {
          setRecipes(response.data.data.data);
          setTimeout(function () {
            setLoading(false);
          }, 1000);
        })
        .catch((err) => console.log(err.response));
      return () => {};
    }, [page]);

    return (
        <RecipesContext.Provider
        value={{
            recipes,
            loading,
            page,
            setPage
        }}
        >
        {children}
        </RecipesContext.Provider>
    );
}