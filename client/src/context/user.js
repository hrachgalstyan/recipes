import React from "react";

export const UserContext = React.createContext();

export default function UserProvider({ children }) {
    const [user, setUser] = React.useState({});

    React.useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      if(user){
        setUser(user);
      } else {
        setUser(null);
      }
    }, []);

    return (
        <UserContext.Provider
        value={{
            user
        }}
        >
        {children}
        </UserContext.Provider>
    );
}