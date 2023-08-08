import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SplashScreen, Profile, Signup, SignIn, OnBoarding, EventScreen, ChatScreen } from '../screens';
import { Header, HeaderLeft, HeaderRight } from '../components';
import { Text } from 'react-native';
import Home from '../screens/Home';
import Mainstyles from '../styles';
import { ChatScreenHeader } from '../screens/chat/components';



const Stack = createNativeStackNavigator();




const homeOptions = {
  title:"",
  headerTitle:()=>(<Text style={Mainstyles.primaryText} >Leenks</Text>),
  headerLeft:()=>(<HeaderLeft/>),
  headerRight:()=>(<HeaderRight/>),
  headerShadowVisible:false,
  headerStyle:{backgroundColor:"rgb(229 231 235)"}, 
 }

const RootNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShadowVisible:false,
      
    }}
     >
      <Stack.Screen options={{headerShown:false}} name="OnBoarding" component={OnBoarding} />
      <Stack.Screen options={{headerShown:false}} name="Welcome" component={SplashScreen} />
      <Stack.Screen options={{headerShown:true}} name="Signup" component={Signup} />
      <Stack.Screen options={{headerShown:true}} name="Signin" component={SignIn} />
      <Stack.Screen options={homeOptions} name="Home" component={Home} />
      <Stack.Screen  name="Event" component={EventScreen} />
      <Stack.Screen options={{header:()=>(<ChatScreenHeader/>)}}  name="Chatscreen" component={ChatScreen} />
      {/* <Stack.Screen options={{title:"Profile", headerRight:()=>(<HeaderRight/>)}} name="profile" component={Profile} /> */}
      <Stack.Screen options={{headerShown:false}}  name="profile" component={Profile} />
      {/* <Stack.Screen name='sidebar' component={SideBarScreen} /> */}
    </Stack.Navigator>
  );
}

export default RootNavigator