import { View, Text, Image } from 'react-native'
import { dabi } from '../assets'




const HeaderRight = () => {
  return (
    <View className=''>
      {/* <Ionicons name="md-menu" size={24} color="black" /> */}
      <Image  source={dabi} className='h-10 w-10 rounded-full'/>
    </View>
  )
}

export default HeaderRight