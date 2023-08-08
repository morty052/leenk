import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import {Feed, People, Places,Events} from './index';
import { Feather, Entypo } from '@expo/vector-icons';
// import { createDrawerNavigator } from '@react-navigation/drawer';



// const SideBar = createDrawerNavigator()
const Home = () => {

  const Test = () => {
    return(
      <>
      </>
    )
  }
  
  const SideBarScreen = () => {
    return(
      <SideBar.Navigator>
        <SideBar.Screen name='Test' component={Test}/>
      </SideBar.Navigator>
    )
  }

  return (
   <>
    <Tab.Navigator>
    <Tab.Screen options={{headerShown:false, title:"Discover", tabBarIcon:()=>(<Feather name="globe" size={24} color="black" />)}} name="Feed" component={Feed} />
    <Tab.Screen options={{headerShown:false,tabBarIcon:()=>(<Entypo name="location" size={24} color="black" />)}} name="Merchants" component={Places} />
    <Tab.Screen options={{headerShown:false,tabBarIcon:()=>(<Entypo name="calendar" size={24} color="black" />)}} name="Events" component={Events} />
    <Tab.Screen options={{headerShown:false, tabBarIcon:()=>(<Entypo name="power-plug" size={24} color="black" />)}} name="Leenks" component={People} />
  </Tab.Navigator>
   </>
  )
}

export default Home