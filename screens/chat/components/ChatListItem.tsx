import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { dabi } from '../../../assets';
import { useNavigation } from '@react-navigation/native';


type Props = {}

const ChatListItem = () => {

    const navigate = useNavigation()

    return (
      <Pressable onPress={() => navigate.navigate("Chatscreen")} style={styles.personRowContainer}>
  
        {/* INNER CONTAINER */}
        <View style={styles.personRowInnerContainer}>
          {/* CHAT IMAGE */}
          <Image source={dabi} className="h-10 w-10 rounded-full" />
  
          {/* CHAT NAME CONTAINER */}
          <View>
            <Text style={styles.contactName}>I am a Person</Text>
            <Text style={styles.lastMessage}>I am a Person</Text>
          </View>
  
        </View>
        
        <View style={styles.personRowStatusContainer} >
           <Text>10:pm</Text>
           <View style={styles.unreadCountContainer}>
            <View style={styles.unreadCount}>
            <Text style={styles.unreadText}>100</Text> 
            </View> 
           </View>
        </View>
      </Pressable>
    );
  }

export default ChatListItem

const styles = StyleSheet.create({
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
        flexDirection:"column",
        justifyContent:"flex-end",
        alignContent:"flex-end",
        // backgroundColor:"red",
        paddingRight:5
      },
      unreadCountContainer:{
        display:"flex",
        flexDirection:"row",
        justifyContent:'flex-end',
        // paddingTop:4
        
      },
      unreadCount:{
        backgroundColor:"red",
        width:24,
        height:24,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:10
      },
      unreadText:{
        fontSize:10
      },
      contactName:{
        fontSize:16,
        fontWeight:"600"
      },
      lastMessage:{
       fontSize:14
      }
      
})