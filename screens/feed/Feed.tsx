import { View, Text, FlatList, ScrollView, Pressable, TextInput, ActivityIndicator } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FeedCard } from './components';
import { dabi, kvito, woman1, woman2 } from '../../assets';
import {useWindowDimensions} from 'react-native';
import { Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import UseFetch from '../../hooks/UseFetch';
import { SafeAreaView } from 'react-native-safe-area-context';


const Stack = createNativeStackNavigator();

const Feed = ({navigation}:any) => {
  const {height, width} = useWindowDimensions();
  const cardwidth = width - 20 + 8
  
  const os = Platform.OS
  const ios = Platform.OS == "ios"

  type person = {
    _id:string,
    imageurl:string,
    firstname:string,

  }

  const people:person[] = UseFetch("https://purring-kind-hippodraco.glitch.me/")
  

  

  const parties = [
    {
      name:"Linda",
      id:1,
      image:kvito
    },
    {
      name:"Linda",
      id:2,
      image:woman1
    },
    {
      name:"Linda",
      id:3,
      image:woman2
    },
    {
      name:"Linda",
      id:4,
      image:dabi
    },
  ]

  const FeedOptions = () => {


    type feedoptionProps = {
      Title: String,
      style: String
    }

    const FeedOption = ({Title, style}:feedoptionProps) => {
      return(
        <View className={` border border-fuchsia-800 w-28  px-4 rounded-3xl flex items-center py-2 ${style}`}>
          <Text>{Title}</Text>
        </View>
      )
    }

    const links = [
      {
        name:"All"
      },
      {
        name:"Following"
      },
      {
        name:"Nearby"
      },
    ]

    

    return(
     <View className={`${ios ? "" : ""}`}>
        <FlatList horizontal  data={links} renderItem={({item, index})=>(
          <FeedOption style={index != 0 ? "mx-2" : "mr-2"} Title={item.name}/>
        )} />
     </View>
    )
  }

  if (!people) {
    return (
      <SafeAreaView className=''>
      <ActivityIndicator/>
      </SafeAreaView>
    )
    
  }

  

  const MainFeed = () => {
    return (
      <ScrollView className='bg-white '>

        <View className={`px-2 mb-4 flex flex-row items-center gap-x-4 ${!ios && "mt-4"}`}>
        <TextInput placeholder='Search People Events and more' className='border border-fuchsia-800 rounded-xl p-2 w-4/5 '/>
        <Pressable className='flex border bg-fuchsia-800 p-2 rounded-xl'>
        <Feather name="search" size={24} color="white" />
        </Pressable>
        </View>

        {/* SORTING TABS */}
        <View className="px-2">
        <FeedOptions/>
        </View>
      
        {/* People */}
        <View className="px-2 mt-6">
          <Text className='text-3xl font-semibold text-fuchsia-800'>People</Text>
         </View>
        <View className="py-4 ">
        <FlatList 
        snapToAlignment='center'
        decelerationRate={0}
        snapToInterval={cardwidth}
        showsHorizontalScrollIndicator={false} 
        horizontal 
        data={people}
        renderItem={({item, index})=>(
          <FeedCard
           handleView={() => navigation.navigate("profile",{profileId:item._id})}
           image={item.imageurl} 
           name={item.firstname}
          style={index === 0 ? "mx-2 " : "mr-2"}
          />
         )} />
        </View>

        {/* Events */}
        <View className="px-2 mt-6">
          <Text className='text-3xl font-semibold text-fuchsia-800'>Events</Text>
         </View>
        <View className="pt-4 pb-24 ">
        <FlatList 
        snapToAlignment='center'
        decelerationRate={0}
        snapToInterval={cardwidth}
        showsHorizontalScrollIndicator={false} 
        horizontal 
        data={parties} 
        renderItem={({item, index})=>(
          <FeedCard
           handleView={() => navigation.navigate("party",{partyid:item.id})}
           id={item.id}  
           image={item.image} 
           name={item.name}
          style={index === 0 ? "mx-2 " : "mr-2"}
          />
         )} />
        </View>
 

      </ScrollView>
    ) 
  }


  

  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name='mainfeed' component={MainFeed}/>
    </Stack.Navigator>
  )
}

export default Feed