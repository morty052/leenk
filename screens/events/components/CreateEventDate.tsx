import { View, Text , SafeAreaView, TextInput,} from 'react-native'

import { Entypo } from '@expo/vector-icons';
import Mainstyles, { utilityStyles } from '../../../styles';

type Props = {
    event:any,
    setevent:any
}

const CreateEventDate = ({event, setevent}: Props) => {
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
          <Text style={Mainstyles.bigText}>Pick a live date for your event</Text>
          <View style={utilityStyles.topPadding}>
          <Text style={Mainstyles.subText}>Please select the date and time your event is going to be live and available for other users.</Text>
          </View>
  
          {/* Create EVENT TITLE INPUT CONTAINER */}
          <View style={utilityStyles.LargePadding} >
             <TextInput 
              
            //   value={event}
              // onChangeText={(e)=>{
              //   setevent((prev:any)=> {
              //     return{
              //       ...prev,
              //       eventname:e
              //     }
              //   })
              // }}
              className='border p-4 rounded-xl bg-white'
              numberOfLines={40}
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

export default CreateEventDate