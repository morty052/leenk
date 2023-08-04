import { View, Text, Pressable, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import "../globals.css"
import { woman1 } from '../assets'


const SplashScreen = ({navigation}:any) => {
  return (
    <SafeAreaView className='bg-gray-50 relative'>

      {/* Marquee Texts */}
      <View className='p-4 h-full bg-gray-100  '>
        <Text className='text-xl font-semibold text-fuchsia-600 text-center'>Leenks</Text>
        <View className="mt-6">
          <Text className='text-5xl font-semibold  my-2'>Meet <Text className='text-fuchsia-600'>People</Text></Text>
          {/* <Text className='text-4xl font-semibold  my-2'><Text className='text-fuchsia-600'>Plan</Text> Events</Text> */}
          <Text className='text-4xl font-semibold  my-2'>Have <Text className='text-fuchsia-600'>Fun</Text></Text>
          <Text className='text-3xl font-semibold text-fuchsia-600 my-2'>Repeat</Text>
        </View>
      </View>

      {/* BUTTONS */}
      <View className='absolute bottom-20 inset-x-0 p-4 z-20 flex gap-y-6 items-center'>
          <Pressable onPress={()=> navigation.navigate("Signin")} className='bg-fuchsia-300 border h-28 w-28 flex items-center justify-center  rounded-full shadow '>
            <Text className=' text-5xl font-black text-white'>Go</Text>
          </Pressable>
          <Pressable onPress={()=> navigation.navigate("Home")} >
            <Text className='text-gray-800'>Skip Sign in</Text>
          </Pressable>
      </View>

      {/* IMAGE */}
      <Image className='absolute bottom-0 h-3/4 w-full ' source={woman1}/>

      {/* RIGHT BUBBLE */}
      <View className='w-72 h-72 rounded-full bg-fuchsia-400/70 absolute top-20 -right-52'>
      </View>
      {/* Left BUBBLE */}
      <View className='w-72 h-72 rounded-full bg-fuchsia-400/70 absolute bottom-0 -left-40'>
      </View>
    </SafeAreaView>
  )
}

export default SplashScreen