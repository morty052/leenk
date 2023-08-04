import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen, Profile, Signup, SignIn } from '../screens';
import { Header, HeaderRight } from '../components';
import { Text } from 'react-native';
import Home from '../screens/Home';


const Stack = createNativeStackNavigator();

const Party = ({route}:any) => {
  const { partyid, otherParam } = route.params;
  return(
    <>
    <Text>{partyid}</Text>
    </>
  )
}

const RootNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShadowVisible:false,
      
    }}
     >
      <Stack.Screen options={{headerShown:false}} name="Welcome" component={SplashScreen} />
      <Stack.Screen options={{headerShown:true}} name="Signup" component={Signup} />
      <Stack.Screen options={{headerShown:true}} name="Signin" component={SignIn} />
      <Stack.Screen options={{title:"Home", header:()=>(<Header/>)}} name="Home" component={Home} />
      <Stack.Screen options={{title:"Profile", headerRight:()=>(<HeaderRight/>)}} name="profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default RootNavigator