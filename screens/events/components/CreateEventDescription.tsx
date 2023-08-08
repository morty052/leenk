import { View, Text , SafeAreaView, TextInput} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import Mainstyles, { utilityStyles } from '../../../styles';


type Props = {
    event:any,
    setevent:any
}

const CreateEventDescription = ({event, setevent}: Props) => {
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
          <Text style={Mainstyles.bigText}>Describe your event in a few words</Text>
  
          {/* Create EVENT TITLE INPUT CONTAINER */}
          <View style={utilityStyles.topPadding}>
          <View style={utilityStyles.topPadding} >
             <TextInput style={{fontSize:18}} 
              value={event?.description}
              onChangeText={(e)=>{
                setevent((prev:any)=> {
                  return{
                    ...prev,
                    eventdescription:e
                  }
                })
              }}
              className='border border-dashed px-2 py-4  rounded-xl bg-white h-96  '
              verticalAlign='top'
              textAlign='left'
              textBreakStrategy='highQuality'
              numberOfLines={400}
              multiline
              />

          </View>
          </View>
        </View>
  
        {/* Create EVENT TITLE EXAMPLES */}
        <View style={utilityStyles.topPadding}>
           <Text style={Mainstyles.primaryTextCentered}>
            Event description should be brief and meaningful to other users
           </Text>
           {/* <Text style={Mainstyles.primaryTextCentered}>
            Users Birthday Event
           </Text>
           <Text style={Mainstyles.primaryTextCentered}>
            Users Watch Along
           </Text>
           <Text style={Mainstyles.primaryTextCentered}>
            Watch Me Cook my latest recipe
           </Text> */}
        </View>
      </SafeAreaView>
      )
}

export default CreateEventDescription