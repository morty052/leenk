import { View, Text , useWindowDimensions, Pressable, Modal} from 'react-native'
import LottieView from 'lottie-react-native';
import Mainstyles from '../../styles';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { CreateEventScreen } from './components';
import { createNewEvent } from './features';
import { useState } from 'react';

const Events = ({route}:any) => {
  // const { profileId} = route.params;
  const {width} = useWindowDimensions();
  type event = {
    
  }

  const [creatingEvent, setCreatingEvent] = useState(false)
  const [activeEvent, setactiveEvent] = useState(false)

  const navigate = useNavigation()

  let userevents :(event|undefined)[] = []

  const NoUserEvents = () =>{
    return(
      <View className='h-full bg-gray-200 px-4 pt-2 flex items-center'>
         <LottieView style={{ height: width, width: width }}
                  source={require("../../assets/emptyghost.json")}
                  autoPlay
                  loop
                />
        <Text className='text-3xl font-semibold -mb-20'>No Events Yet</Text>
        <View className="flex gap-y-4 mt-20 py-4">
        <Pressable onPress={()=> {
          setCreatingEvent(true)
          console.log("Creating Event")
        }
        }
          style={Mainstyles.iconButton} >
          <Text style={Mainstyles.buttonText}>Create Event</Text>
          <Entypo name="circle-with-plus" size={24} color="white" />
        </Pressable>
        <Pressable onPress={()=> navigate.navigate("Feed")}
         style={Mainstyles.iconButtonAlt} >
          <Text style={Mainstyles.AltbuttonText} >Discover Events</Text>
          <Entypo name="arrow-long-right" size={24} color="rgb(232 121 249 )" />
        </Pressable>
        </View>
        <CreateEventScreen setModalOpen={setCreatingEvent}  modalOpen={creatingEvent}
        createEvent={() => {
          // createNewEvent("3b160d25-7d01-4b8d-8fb5-f92f21dd99c2")
          console.log("Creating Event")
          setCreatingEvent(false)
          }}/>
      </View>
    )
  }

  //SHOW EMPTY EVENTS SCREEN IF USER HAS NO EVENTS IN DATABASE
  if (userevents.length < 1) {
    return (
      <NoUserEvents/>
    )
  }

  //RENDER MAIN EVENTS SCREEN IF USER HAS AT LEAST ONE EVENT
  return (
    <View>
      <Text>Events</Text>
    </View>
  )
}

export default Events