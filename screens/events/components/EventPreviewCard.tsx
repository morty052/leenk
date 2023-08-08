import {Text, View, Pressable, Image } from 'react-native'
import {useWindowDimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { dabi } from '../../../assets';
import * as ImagePicker from "expo-image-picker"
import { useState } from 'react';


type Props = {
    style?: String,
    id?:Number,
    image?:string,
    name?:string,
    handleView?:any,
    type:React.ReactNode,
    ticketprice:string | number
   
}

const EventPreviewCard = ({style, id, image, name, handleView, type, ticketprice}: Props) => {

    const navigation = useNavigation()
    const {height, width} = useWindowDimensions();
    const cardwidth = width - 20
    const cardHeight = height /2 + 100

    const [EventImage, setEventImage] = useState("")

    const formatter = ticketprice.toLocaleString("en-NG",{
      style:"currency",
      currency:"NGN",
      // currencySign:"USD"
    })
    
    const pickImage = async () => {
        const image = await ImagePicker.launchImageLibraryAsync({
          mediaTypes:ImagePicker.MediaTypeOptions.Images,
          quality:1,
        })
    
        if (!image.canceled) {
          setEventImage(image.assets[0].uri)
        }
    
      }
    

    return (
      <View
        style={{ width:cardwidth, height: cardHeight }}
        className={` rounded-3xl overflow-hidden  border-gray-800      flex flex-col relative ${style} `}
      >

        {/* EVENT IMAGE */}
        {  image?
        <View className="h-2/4 w-full relative ">
             <Image
            resizeMode='cover'
            className="w-full h-full  "
            source={{uri:image}}
            // src={String(image)}
          /> 
         <Pressable onPress={()=> setEventImage("")} className='absolute -top-0 right-2 bg-red-300'>
            <Text className='text-3xl' >
                X
            </Text>
         </Pressable>
        </View>
        :
        <View className="h-2/4 w-full rounded-t-3xl bg-white border border-dashed flex flex-col justify-center items-center gap-y-2 ">
            <Pressable onPress={()=> pickImage()} className='flex items-center'>
            <Entypo name="circle-with-plus" size={80} />
            <Text className='text-xl'>Add Event Image</Text>
            </Pressable>
        </View>

        }

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
              {formatter}
            </Text>
          </View>
        </View>
        </View>
        </View>
      </View>
    );
}

export default EventPreviewCard

