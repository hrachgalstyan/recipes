import React from "react";

export const UserContext = React.createContext();

export default function UserProvider({ children }) {
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
      const token = localStorage.getItem('jwt');
      const name = localStorage.getItem('name');
      if(token && name) {
        setUser({token, name});
      } else {
        setUser(null);
      }
    return () => {};
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