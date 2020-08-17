import React from "react";

export const UserContext = React.createContext();

export default function UserProvider (props) {
    const [user, setUser] = React.useState({});

    React.useEffect(() => {
      const user = JSON.parse(localStorage.getItem('user'));
      if(user){
        console.log(user);
        setUser(user);
      } else {
        setUser({});
      }
      return () => {};
    }, []);

    return (
        <UserContext.Provider
        value={{
            user
        }}
        >
        {props.children}
        </UserContext.Provider>
    );
}