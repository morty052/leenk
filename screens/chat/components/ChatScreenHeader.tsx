import { StyleSheet, Text, View, Image } from 'react-native'
import {Entypo} from "@expo/vector-icons"
import { dabi } from '../../../assets'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const ChatScreenHeader = (props: Props) => {

    const navigation = useNavigation()
    
    

  return (
    <View style={styles.headerContainer}>
     <View style={styles.headerLeft}>
     <Entypo onPress={()=> navigation.goBack()} name="arrow-left" size={20} />
      <Image resizeMode="cover" style={styles.headerImage} source={dabi} />
      <View style={styles.contactName}>
        <Text style={styles.contactNameText}>Elon Musk</Text>
        <Text style={styles.lastSeen}>last seen 10 minutes ago</Text>
      </View>
     </View>

      <View style={styles.headerRight}>
      <Entypo onPress={() => navigation.navigate("call")} name="phone" size={25} />
      <Entypo onPress={() => navigation.navigate("video")} name="video" size={25} />
      <Entypo onPress={() => navigation.navigate("media")} name="menu" size={25} />
      </View>
    </View>
  );
}

export default ChatScreenHeader

const styles = StyleSheet.create({
    headerContainer:{
        marginTop:60,
        // backgroundColor:"red",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:5,
        paddingVertical:10
    },
    headerImage:{
        width:40,
        height:40,
        borderRadius:20,
        marginLeft:12
    },
    contactName:{
        marginHorizontal:12
    },
    contactNameText:{
     fontSize:18,
     fontWeight:"600"
    },
    lastSeen:{
     fontSize:12,
     fontWeight:"300"
    },
    headerLeft:{
    display:'flex',
    flexDirection:"row",
    alignItems:"center"
    },
    headerRight:{
        display:'flex',
        flexDirection:"row",
        alignItems:"center",
        paddingRight:6,
        gap:15
    }
})