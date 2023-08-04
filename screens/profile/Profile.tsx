import { View, Text, ActivityIndicator, Image } from 'react-native'
import { Audio } from 'expo-av';
import * as React from 'react';
import UseFetch from '../../hooks/UseFetch';
import { SafeAreaView } from 'react-native-safe-area-context';


type Props = {}

const Profile = ({route}:any) => {
    const { profileId} = route.params;
    const [loading, setloading] = React.useState(true)

     const user = UseFetch(`https://purring-kind-hippodraco.glitch.me/users/${profileId}`)
     
     const {firstname, lastname, imageurl} = user?.[0] ? user[0] : []
    
     

     if (user.length < 1) {
        return(
            <SafeAreaView className='h-full flex items-center justify-center bg-red-300'>
                <ActivityIndicator/>
            </SafeAreaView>
        )
      } 

  return (
    <View className='h-full bg-white'>
        <View className='py-4 px-4 flex flex-row items-center gap-x-6'>
      <View className='h-20 w-20 rounded-full border border-fuchsia-800 '>
      <Image resizeMode='contain' className='w-full h-full rounded-full  ' source={{uri:`https://cdn.sanity.io/images/r78c84um/production/${imageurl}`}}/>
      </View>
      <View className="flex ">
       <Text className='text-center font-semibold text-xl'>0</Text>
       <Text className=' text-sm  font-light'>Events</Text>
      </View>
      <View className="flex ">
       <Text className='text-center font-semibold text-xl'>0</Text>
       <Text className=' text-sm  font-light'>Leenks</Text>
      </View>
      <View className="flex ">
       <Text className='text-center font-semibold text-xl'>0</Text>
       <Text className=' text-sm  font-light'>Mutuals</Text>
      </View>
    </View>
    </View>
  )
}

export default Profile