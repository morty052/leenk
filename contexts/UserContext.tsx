import React,{createContext, useContext, useState} from 'react'
import { useAuth, useUser } from "@clerk/clerk-expo";

type User = {}

interface UserContextType {
  user: User | null;
  signIn?: (username: string, password: string) => Promise<void>;
  signOut?: () => void;
  loggedIn: boolean | undefined
}

const UserContext = createContext<UserContextType>({
  loggedIn:false,
  user:null
});

export  function UserContextProvider({children}: any) {
  const { isSignedIn } = useUser();

  const [loggedIn, setloggedIn] = useState<boolean | undefined>(isSignedIn)

  return (
    <UserContext.Provider value={{
        user:"Adam",
        loggedIn,
    }}>
         {children}
    </UserContext.Provider>
  )
}

export default function useAuthContext() {
    return useContext<UserContextType>(UserContext)
}