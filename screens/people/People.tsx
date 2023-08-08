import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Mainstyles,{utilityStyles} from '../../styles'
import { dabi } from '../../assets'
import { ChatListItem } from '../chat/components'
import { useNavigation } from '@react-navigation/native'

const PersonRow = () => {
  return (
    <View style={specialStyles.personRowContainer}>

      {/* INNER CONTAINER */}
      <View style={specialStyles.personRowInnerContainer}>
        {/* CHAT IMAGE */}
        <Image source={dabi} className="h-10 w-10 rounded-full" />

        {/* CHAT NAME CONTAINER */}
        <View>
          <Text>I am a Person</Text>
          <Text>I am a Person</Text>
        </View>

      </View>
      
      <View >
         <Text>10:pm</Text>
         <View style={specialStyles.personRowStatusContainer} className='flex  justify-end flex-row'>
         <Text>1</Text>  
         </View>
      </View>
    </View>
  );
}

const People = ({}) => {

  const navigation = useNavigation()


  return (
    <View style={Mainstyles.Layout}>
      <View style={utilityStyles.xpadding}>
      <Text style={Mainstyles.bigText}>All Leenks</Text>
      <Text style={Mainstyles.subText}>Manage all Your Leenks</Text>
      </View>

      {/* TABS */}
      <View style={utilityStyles.xpadding}>
      <View style={specialStyles.tabBarContainer}>
        <TouchableOpacity onPress={()=> navigation.getParent()} style={specialStyles.tabButton}>
          <Text style={specialStyles.tabText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={specialStyles.tabButton}>
          <Text style={specialStyles.tabText}>Circle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={specialStyles.tabButton}>
          <Text style={specialStyles.tabText}>Events</Text>
        </TouchableOpacity>
      </View>
      </View>

      {/* ACTIVE TAB Container */}
      <View style={specialStyles.activeTabContainer}>
       <ChatListItem/>
       <ChatListItem/>
       <ChatListItem/>
      </View>
    </View>
  );
};


const specialStyles = StyleSheet.create({
  tabBarContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical:15,
    paddingRight:40,
  },
  tabButton:{
    backgroundColor:"red",
    padding:5,
    width:100,
    display:"flex",
    justifyContent:"center",
    flexDirection:"row",
    borderRadius:20,
    elevation:50
  },
  tabText:{
    color:"white"
  },
  activeTabContainer:{
    marginVertical:10,
    paddingVertical:10,
    borderTopWidth:2,
    borderColor:"lightgrey",
    display:"flex",
    flexDirection:"column",
    backgroundColor:"white",
    // paddingHorizontal:
  },
  personRowContainer:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    padding:10,
    gap:20,
    backgroundColor:"white",
    // marginVertical:5,
    borderTopWidth:1,
    justifyContent:"space-between"
    
  },
  personRowInnerContainer:{
    display:"flex",
    flexDirection:"row",
    alignItems:"center",
    gap:10
    
  },
  personRowStatusContainer:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-end",
    alignContent:"flex-end",
    backgroundColor:"red",
    paddingRight:5
  }
})

export default People