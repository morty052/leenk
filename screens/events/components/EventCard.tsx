import {Text, View, Pressable, Image } from 'react-native'
import {useWindowDimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { dabi } from '../../../assets';


type Props = {
    style?: String,
    id?:Number,
    image:string,
    name?:string,
    handleView?:any,
    type:React.ReactNode
   
}

const EventCard = ({style, id, image, name, handleView, type}: Props) => {

    const navigation = useNavigation()
    const {height, width} = useWindowDimensions();
    const cardwidth = width - 20
    const cardHeight = height /2 + 100

    

    

    return (
      <View
        style={{ width:cardwidth, height: cardHeight }}
        className={` rounded-3xl overflow-hidden border border-gray-800    flex flex-col relative ${style} `}
      >
        {/* EVENT IMAGE */}
        <View className="h-2/4 w-full ">
        <Image
          resizeMode='contain'
          className="w-full h-full  "
          source={{uri:`https://cdn.sanity.io/images/r78c84um/production/${image}`}}
          // src={String(image)}
        />
        </View>

        {/* BUTTONS */}
        <View className='h-2/4 w-full flex bg-white '>
        
        {/* EVENT NAME */}
        <View className="flex  flex-row justify-between  py-4 px-2  border-t border-gray-200 rounded-b-xl    ">
        <View>
          <Text className='text-lg text-gray-800  font-semibold'>
           {name}
          </Text>
        </View>
        <View className="flex flex-row ">
        <Pressable onPress={handleView} className="mx-4">
            <Entypo  name="login" size={32} color="black" />
       </Pressable>
          <View className="">
            {/* <Entypo name="heart" size={32} color="red" /> */}
          </View>
        </View>
        </View>

        {/* EVENT HOST */}
        <View className="flex  flex-row justify-between  py-4 px-2  border-t border-gray-200 rounded-b-xl    ">
        <View>
          <Text className='text-lg text-gray-800  font-semibold'>
            Host
          </Text>
        </View>
        <View className="flex flex-row pr-2 ">
          <View className="">
          <Image  source={dabi} className='h-8 w-8 rounded-full'/>
          </View>
        </View>
        </View>

        {/* EVENT TYPE */}
        <View className="flex  flex-row justify-between  py-4 px-2  border-t border-gray-200 rounded-b-xl    ">
        <View>
          <Text className='text-lg text-gray-800  font-semibold'>
            Event Type:
          </Text>
        </View>
        <View className="flex flex-row ">
        <Pressable onPress={handleView} className="mx-4">
            <Text className="text-lg font-semibold">
            {type}
            </Text>
       </Pressable>
        </View>
        </View>


        {/* EVENT VENUE */}
        {/* <View className="flex  flex-row justify-between  py-4 px-2  border-t border-gray-200 rounded-b-xl    ">
        <View>
          <Text className='text-lg text-gray-800  font-semibold'>
            Venue:
          </Text>
        </View>
        <View className="flex flex-row ">
        <Pressable onPress={handleView} className="mx-4">
            <Text className="text-lg font-semibold">
            Seychelles
            </Text>
       </Pressable>
        </View>
        </View> */}

         

        {/* EVENT FEE */}
        <View className="flex  flex-row items-center justify-between  py-4 px-2  border-t border-gray-200 rounded-b-xl    ">
        <View>
          <Text className='text-lg text-gray-800  font-semibold'>
            Ticket
          </Text>
        </View>
        <View className="flex flex-row ">
          <View className="bg-fuchsia-400 rounded-3xl px-4 py-2">
            <Text className="text-lg font-semibold">
              $5
            </Text>
          </View>
        </View>
        </View>
        </View>
      </View>
    );
}

export default EventCard

