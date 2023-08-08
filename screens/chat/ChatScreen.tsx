import { View, Text, ImageBackground , StyleSheet, FlatList, TextInput, Image, Modal} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { dabi } from '../../assets'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Entypo} from "@expo/vector-icons"
import { useState } from 'react'
import * as imagePicker from "expo-image-picker"




type Props = {
  isMyMessage:boolean
}

const Screens = createNativeStackNavigator()

const ChatScreen = () => {

const [PreviewImage, setPreviewImage] = useState<string>("")
const [ImageModal, setImageModal] = useState(false)

  const pickImage = async() => {
    let image = await imagePicker.launchImageLibraryAsync({
      quality:1,
      mediaTypes:imagePicker.MediaTypeOptions.Images
    })

    console.log(image)

    if (!image.canceled) {
      setPreviewImage(image.assets[0].uri)
      setImageModal(true)
    }
  }

  const ChatBubble = ({isMyMessage}: Props) => {
    return(
      <View style={[styles.chatBubbleContainer,{
        justifyContent: isMyMessage ? "flex-end" : "flex-start"
      }]} >
      <View style={styles.chatBubble} >
      <Text style={styles.chatText} >Hello i am a text from someone okay not too shabby</Text>
      </View>
      </View>
    )
  }

  const ChatInput = () => {

    const [typing, settyping] = useState("")

    return(
      <View className='bg-transparent absolute bottom-0 h-28 inset-x-0'>
        
        <View className='py-4 px-2 flex flex-row items-center '>
        <View className='flex-1 flex flex-row border bg-white/50 rounded-xl relative pr-4 '>
        <TextInput
         value={typing}
         onChangeText={(text) => settyping(text)}
         multiline
        className='flex-1 py-2.5 px-2  '/>
         <View className=' flex items-center justify-center '>
        <Entypo name="aircraft" size={20} color={"white"}/>
        </View>
        </View>
        <View className='h-10 w-10 bg-fuchsia-300 flex justify-center items-center rounded-full ml-1'>
        {!typing ? <Entypo onPress={() => pickImage()} name="mic" size={20}/> :<Entypo name="aircraft" size={20}/> }
        </View>
        </View>
      </View>
    )
  }

  const ImagePreviewModal = () => {
    
    return(
      <Modal transparent  visible={ImageModal}>
         <SafeAreaView className=''>
         <View className='pt-20 px-10 h-full bg-white/50 '>
         { PreviewImage &&  <Image className='h-2/4 w-full' source={{uri:PreviewImage}} />}
         </View>
         </SafeAreaView>
      </Modal>
    )
  }

 let list = [
     {
      isMyMessage:false
     },
     {
      isMyMessage:true
     },
     {
      isMyMessage:false
     },
     {
      isMyMessage:true
     },
     {
      isMyMessage:false
     },
   
  ]

  const MainChatScreen = () => {
    return (
      <View>
      <ImageBackground style={styles.bg}
          source={dabi}>
       <View >
       <FlatList 
        data={list} renderItem={({item})=>(
          <ChatBubble isMyMessage={item.isMyMessage} />
        )} />
       </View>
        <ChatInput/>
        <ImagePreviewModal/>
      </ImageBackground>
       </View>
    )
  }

  const CallScreen = () => {
    return (
      <View>
        <Text>Call</Text>
      </View>
    )
  }

  const VideoCallScreen = () => {
    return (
      <View>
        <Text>VideoCall</Text>
      </View>
    )
  }

  const MediaScreen = () => {
    return (
      <View>
        <Text>Media</Text>
      </View>
    )
  }
  


  return (
    <Screens.Navigator>
      <Screens.Screen options={{headerShown:false}} name='chat' component={MainChatScreen} />
      <Screens.Screen options={{headerShown:false}} name='call' component={CallScreen} />
      <Screens.Screen options={{headerShown:false}} name='video' component={VideoCallScreen} />
      <Screens.Screen options={{headerShown:false}} name='media' component={MediaScreen} />
    </Screens.Navigator>
    // <MainChatScreen/>
  )
}

const styles = StyleSheet.create({
  bg:{
    height:"100%",
    position:"relative"
  },
  overlay:{
    position:"absolute",
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor:"black",
    zIndex:10,
    opacity:0.4
  },
  chatBubble:{
  margin:10,
  borderRadius:20,
  Width:100,
  maxWidth:240,
  paddingHorizontal:10,
  paddingVertical:5,
  backgroundColor:"white",
  

  },
  chatText:{
    fontSize:18,
    fontWeight:"400",
  },
  chatBubbleContainer:{
    display:"flex",
    flexDirection:"row",
    width:"100%",
  }
})

export default ChatScreen