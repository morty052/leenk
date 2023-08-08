import { View, Text , SafeAreaView, TextInput} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import Mainstyles, { utilityStyles } from '../../../styles';
import EventPreviewCard from './EventPreviewCard';

type Props = {
    event:any,
    setevent:any
}

const CreateEventPreview = ({event, setevent}: Props) => {

  const  {eventtype} = event

  const HandleEventType  = () => {
    let type = "Event"

    switch (true) {
      case eventtype.party:
        type = "Party"
        break;
      case eventtype.onlineevent:
        type= "Live Stream"
        break;
      case eventtype.tutorial:
        type= "Tutorial"
        break;
      case eventtype.livestream == true:
        type= "Live Stream"
        break;

      case eventtype.wager:
        type= "Wager"
        break;
    
      default:
        break;
    }

   return (
    <Text>{type}</Text>
   )
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
          <Text style={Mainstyles.bigText}>Lets see what your event looks like.</Text>
  
          {/* Create EVENT TITLE INPUT CONTAINER */}
          <View style={[utilityStyles.tinyTopPadding, utilityStyles.fcenter]} >
          <EventPreviewCard 
           image={event?.eventimage}
           name={event?.eventname}
           ticketprice={Number(event?.eventprice)}
           type={<HandleEventType/>}
           />
          </View>
        </View>
  
        {/* Create EVENT TITLE EXAMPLES */}
        <View style={utilityStyles.topPadding}>
           <Text style={Mainstyles.primaryTextCentered}>
            Examples
           </Text>
           <Text style={Mainstyles.primaryTextCentered}>
            Users Birthday Event
           </Text>
           <Text style={Mainstyles.primaryTextCentered}>
            Users Watch Along
           </Text>
           <Text style={Mainstyles.primaryTextCentered}>
            Watch Me Cook my latest recipe
           </Text>
        </View>
      </SafeAreaView>
      )
}

export default CreateEventPreview