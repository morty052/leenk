import {Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { dabi } from '../assets';
import useAuthContext from '../contexts/UserContext';
import { useAuth, useUser } from "@clerk/clerk-expo";
import { useNavigation } from '@react-navigation/native';



type Props = {}

const Header = (props: Props) => {
    const os = Platform.OS

    const {loggedIn} = useAuthContext()
    const { isSignedIn } = useUser();

    const navigation = useNavigation()
    

  return (
   os === "ios" ? 
   <SafeAreaView className='bg-white '>
    <View className='flex flex-col justify-end '>
     <View className=" px-4 flex flex-row  items-center justify-between  ">
    <Entypo name="menu" size={24} color="black" />
    <Text onPress={() => navigation.navigate("Signup")} className='text-fuchsia-800 text-lg font-black'>Leenks</Text>
    {/* <Entypo name="circle" size={24} color="black" /> */}
    {
      isSignedIn ? <Image  source={dabi} className='h-10 w-10 rounded-full'/> : <Text onPress={() => navigation.navigate("Signin")}>Login</Text>
    }
    </View>
   </View>
   </SafeAreaView> 
   :
   <View className='flex flex-col mt-12 justify-end '>
     <View className=" px-4 flex flex-row  items-center justify-between  ">
    <Entypo name="menu" size={24} color="black" />
    <Text className='text-black text-lg font-black'>Leenks</Text>
    {/* <Entypo name="circle" size={24} color="black" /> */}
    {
      isSignedIn ? <Image  source={dabi} className='h-10 w-10 rounded-full'/> : <Text onPress={() => navigation.navigate("Signin")}>Login</Text>
    }
    </View>
   </View>

  )
}

export default Header

