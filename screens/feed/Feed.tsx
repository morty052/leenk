import { View, Text, FlatList, ScrollView, Pressable, TextInput, ActivityIndicator } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FeedCard } from './components';
import { EventCard } from '../events/components';
import { dabi, kvito, woman1, woman2 } from '../../assets';
import {useWindowDimensions} from 'react-native';
import { Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import UseFetch from '../../hooks/UseFetch';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Faker, en} from "@faker-js/faker"



const Stack = createNativeStackNavigator();

const Feed = ({navigation}:any) => {
  const {height, width} = useWindowDimensions();
  const cardwidth = width - 20 + 8
  
  const os = Platform.OS
  const ios = Platform.OS == "ios"

   const cf = new Faker({locale:[en]})

   class FakePerson {
    firstname
    lastname
    avatar
    constructor(){
      this.firstname =  cf.person.firstName()
      this.lastname = cf.person.lastName()
      this.avatar = cf.image.urlPicsumPhotos()
    }
   }

   const p = new FakePerson()

   const fakepeopleArray = new Array(20).fill(null).map(()=>(
    new FakePerson
   ))

   console.log(p)

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

  if (people.length < 1) {
    return (
      <SafeAreaView className='bg-gray-200 h-full'>
      <ActivityIndicator/>
      <Text onPress={()=> console.log(p)}>T</Text>
      <FlatList
       horizontal
      data={fakepeopleArray}
      renderItem={({item, index})=>(

      <FeedCard 
       handleView={()=> navigation.navigate("profile", {
        profileId:item.firstname
       })}
       style={index == 0 ? " ml-2 mr-4" : "mx-4"}
      image={item.avatar}
      name={item.firstname} />
      )} />
      </SafeAreaView>
    )
    
  }

  

  const MainFeed = () => {
    return (
     <View className='bg-gray-200 pt-4'>
       <ScrollView className=''>

<View className={`px-2 mb-4 flex flex-row items-center gap-x-4 `}>
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
<View className="pt-4 ">
<FlatList 
snapToAlignment='center'
decelerationRate={0}
snapToInterval={cardwidth}
showsHorizontalScrollIndicator={false} 
horizontal 
data={people} 
renderItem={({item, index})=>(
  <EventCard
   handleView={() => navigation.navigate("Event",{partyid:item._id})}
   image={item.imageurl} 
   name={item.firstname}
  style={index === 0 ? "mx-2 " : "mr-2"}
  />
 )} />
</View>

{/* Merchants */}
<View className="px-2 mt-6">
  <Text className='text-3xl font-semibold text-fuchsia-800'>Merchants</Text>
 </View>
<View className="pt-4 pb-24 ">
<FlatList 
snapToAlignment='center'
decelerationRate={0}
snapToInterval={cardwidth}
showsHorizontalScrollIndicator={false} 
horizontal 
data={people} 
renderItem={({item, index})=>(
  <EventCard
   handleView={() => navigation.navigate("party",{partyid:item._id})}
   image={item.imageurl} 
   name={item.firstname}
  style={index === 0 ? "mx-2 " : "mr-2"}
  />
 )} />
</View>


</ScrollView>
     </View>
    ) 
  }


  

  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name='mainfeed' component={MainFeed}/>
    </Stack.Navigator>
  )
}

export default Feed