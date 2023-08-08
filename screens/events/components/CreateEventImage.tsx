import { View, Text , SafeAreaView, Image, StyleSheet, useWindowDimensions} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import Mainstyles, { utilityStyles } from '../../../styles';
import * as ImagePicker from "expo-image-picker"
import { useState } from 'react';

type Props = {
    event:any,
    setevent:any
}

const CreateEventImage = ({event, setevent}: Props) => {

  const {width, height} = useWindowDimensions()
  const container = width - 40
  const [EventImage, setEventImage] = useState("")

  const pickImage = async () => {
    const image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:ImagePicker.MediaTypeOptions.Images,
      quality:1,
    })

    if (!image.canceled) {
      setevent((prev:any)=>(
        {
          ...prev,
          eventimage:image.assets[0].uri

        }
      ))
      setEventImage(image.assets[0].uri)
      
    }

  }

    return(
        <SafeAreaView className="bg-gray-200 h-full w-full">
        {/* Create EVENT HEADER */}
        <View className=" px-4 mt-20 ">
          <View className="flex flex-row items-center justify-between">
            <Text
              style={Mainstyles.primaryText}
              onPress={() => console.log(event)}
            >
              Create New Event
            </Text>
            <Entypo name="circle-with-plus" size={24} color="white" />
          </View>
        </View>
         
         {/* Create EVENT TITLE AND INPUT CONTAINER */}
        <View style={utilityStyles.basicPadding} >
          {/* Create EVENT TITLE TEXT */}
          <Text style={Mainstyles.bigText}>Lets Pick an Image for your event.</Text>
  
          {/* Empty Image Container*/}
          <View style={styles.emptyImageMainContainer}>
          <View style={[styles.emptyImageContainer,{width:container}]}>
          { !EventImage ?
            <Entypo onPress={()=> pickImage()} name="circle-with-plus" size={100} color="white" />
            :
            <Image style={{width:"100%", height:"100%", borderRadius:20}} source={{uri:EventImage}} />
          }
          </View>
          </View>
        </View>
  
        {/* Create EVENT Image Description */}
        <View style={utilityStyles.topPadding}>
           <Text onPress={()=> setEventImage("")} style={Mainstyles.primaryTextCentered}>
            Event image should be meaningful and descriptive to other users
           </Text>
        </View>
      </SafeAreaView>
      )
}

const styles =  StyleSheet.create({
  emptyImageContainer:{
     borderColor:'black',
     borderStyle:"dashed",
     borderWidth:2,
     marginHorizontal:"auto",
     height:400,
     borderRadius:20,
     display:"flex",
     justifyContent:"center",
     alignItems:"center"
     
  },
  emptyImageMainContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    paddingVertical:20
  }
})

export default CreateEventImage