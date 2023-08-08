import { StatusBar } from 'expo-status-bar';
import "./globals.css";
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './navigators/RootNavigator';
import { UserContextProvider } from './contexts/UserContext';
import { ClerkProvider } from "@clerk/clerk-expo";


const CLERK_PUBLISHABLE_KEY="pk_test_cmVhbC1idW5ueS0yNS5jbGVyay5hY2NvdW50cy5kZXYk"
export default function App() {
  return (
  
   <>
   <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
   <UserContextProvider>
    <NavigationContainer>
    <RootNavigator/>
    </NavigationContainer>
    <StatusBar backgroundColor='black' style='auto'/>
   </UserContextProvider>
   </ClerkProvider>
   </>
  );
}


