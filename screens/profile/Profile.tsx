import { View, Text, ActivityIndicator, Image, Pressable, ScrollView, TextInput, StyleSheet, useWindowDimensions, FlatList, Modal, SafeAreaView  } from 'react-native'
import { Audio } from 'expo-av';
import * as React from 'react';
import UseFetch from '../../hooks/UseFetch';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FetchMovie, FetchPremierLeague } from './features';
import Mainstyles,{utilityStyles as u,} from '../../styles';
import { dabi } from '../../assets';



const UserTab = createBottomTabNavigator();
type interest = {

}

const Profile = ({route}:any) => {
    const { profileId} = route.params;
    const [loading, setloading] = React.useState(true)
    const [activeInterestItem, setactiveInterestItem] = React.useState<boolean|interest>(false)
   const [interestModal, setinterestModal] = React.useState(false)

    type person = {
     firstname?:string,
     lastname?:string,
     imageurl?:string
    }

    type interest = {
      name:string,
      image:string,
      type:any,
      interest:interest
    }

    const interests = [
      {
        name:"Movies"
      },
      {
        name:"Sports"
      },
      {
        name:"Books"
      },
      {
        name:"Personal"
      },
    ]

    const user  = UseFetch(`https://purring-kind-hippodraco.glitch.me/users/${profileId}`)

    // if (user.length < 1) {
    //   return null
    // }
     
    // const {firstname, lastname, imageurl} = user ? user?.[0] : []
    
    //  if (user.length < 1) {
    //     return(
    //         <SafeAreaView className='h-full flex items-center justify-center bg-fuchsia-300'>
    //             <ActivityIndicator/>
    //         </SafeAreaView>
    //     )
    //   } 


    const handleInterestModal = (item:interest) => {
       setactiveInterestItem(item)
       setinterestModal(true)
    }

      const UserProfile = () => {
 
        type movie = {
          original_title:string,
        }

        const [movieTitle, setmovieTitle] = React.useState("")
        const [movies, setmovies] = React.useState<(movie)[] >(null) 

        const handleFetchMovies = async () => {
          let result = await FetchMovie(movieTitle)
          setmovies(result)
          console.log(result)
        }

        return(
          <View className='h-full bg-white'>
        <View className='py-4 px-4 flex flex-row items-center gap-x-6'>
      <View className='h-20 w-20 rounded-full border border-fuchsia-800 '>
      {/* <Image resizeMode='contain' className='w-full h-full rounded-full  ' source={{uri:`https://cdn.sanity.io/images/r78c84um/production/${imageurl}`}}/> */}
      </View>
      <View className="flex ">
       <Text className='text-center font-semibold text-xl'>0</Text>
       <Text className=' text-sm  font-light'>Events</Text>
      </View>
      <View className="flex ">
       <Text className='text-center font-semibold text-xl'>0</Text>
       <Text className=' text-sm  font-light'>Leenks</Text>
      </View>
      <View className="flex ">
       <Text className='text-center font-semibold text-xl'>0</Text>
       <Text className=' text-sm  font-light'>Mutuals</Text>
      </View>
        </View>
        
        <TextInput className='p-4 border'
         onChangeText={text => setmovieTitle(text)}
        />
        <Pressable onPress={() => handleFetchMovies()}>
          <Text>Fetch Movie</Text>
        </Pressable>
        <ScrollView>
          {
            movies &&  
             movies.map((movie, index) => (
              <ScrollView key={index}>
                <Image className='h-96 w-full' source={{uri:`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}}/>
              <View >
                <Text >
                {movie.original_title}
               </Text>
              </View>
              </ScrollView>
             ))
          }
        </ScrollView>
    </View>
        )
      }

      const Interests = () => {

        const {width} = useWindowDimensions()
        const cardWidth = width - 5
        const interestWidth = cardWidth/2 - 5

        const InterestTab = ({name}:interest) => {

          

          return(
            <View style={styles.InterestTabContainer}>
              <Text>{name}</Text>
            </View>
          )
        }

        const InterestItem = ({handleInterestModal}) => {
          return(
          <Pressable onPress={() => handleInterestModal()}>
             <View style={[styles.InterestItem, {width:interestWidth, height:interestWidth}]}>
            <View >
            <Image style={styles.interestImage} source={dabi}/>
            </View>
            {/* <View style={styles.interestNameContainer}>
              <Text style={styles.interestName}>Name</Text>
            </View> */}
          </View>
          </Pressable>
          )
        }

        const InterestItemModal = () => {

          const {name} = activeInterestItem ? activeInterestItem : []

          return(
            <Modal visible={interestModal}>
               
                  <SafeAreaView style={[Mainstyles.Layout, u.basicPadding]}>
                <View style={u.basicPadding} >
                   <Text onPress={() => {
                    setactiveInterestItem(false)
                    setinterestModal(false)
                    }} >{name}</Text>
                </View>
                   </SafeAreaView>
            </Modal>
          )
        }

        const list = new Array(10).fill({name:"movie"})

        return (
          <SafeAreaView style={Mainstyles.Layout}>
            <View style={[u.tinyTopPadding, u.xpadding]}>
              <Text style={Mainstyles.bigText}>My Interests</Text>
            </View>

            {/* INTEREST TABS */}
            <View style={[u.xpadding, u.tinyTopPadding, u.flex]}>
             <FlatList horizontal data={interests} renderItem={({item})=>(
              <InterestTab name={item.name}/>
             )} />
            </View>

            {/* INTEREST VIEW MAIN CONTAINER */}
            <View style={u.fcenter}>
            <View style={[styles.ViewInterestContainer, {width:cardWidth}]}>

            {/* INTEREST VIEW HEADER */}
              <View style={u.xpadding}>

                
              <View style={[styles.ViewInterestHeader]}>
                 <Text style={Mainstyles.primaryText}>
                    All
                 </Text>
               </View>

              </View>

              {/* INTERESTS INNER CONTAINER */}
              <FlatList 
               numColumns={2}
              contentContainerStyle ={{paddingBottom:150}}
               style={styles.ViewInterestInnerContainer}
               data={list}
               renderItem={({item})=>(
                <InterestItem handleInterestModal={() => handleInterestModal(item)} />
               )}
              />
            {/*  */}
            <InterestItemModal/>
            </View>
            </View>
          </SafeAreaView>
        );
      }

  return (
    <UserTab.Navigator>
      <UserTab.Screen name="Profile" component={UserProfile} />
      <UserTab.Screen name="Memories" component={UserProfile} />
      <UserTab.Screen options={{headerShown:false}} name="Space" component={Interests} />
      <UserTab.Screen name="Events" component={UserProfile} />
    </UserTab.Navigator>
  )
}

const styles = StyleSheet.create({
  InterestTabContainer:{
     backgroundColor:"red",
     width:80,
     paddingHorizontal:10,
     paddingVertical:5,
     borderRadius:20,
     display:"flex",
     flexDirection:"row",
     alignItems:"center",
     justifyContent:"center",
     marginRight:10
  },
  ViewInterestContainer:{
   marginTop:20, 
  },
  ViewInterestHeader:{
   borderBottomWidth:4,
   borderBottomColor:"lightgray",
   width:"50%",
   paddingHorizontal:10,
  },
  ViewInterestInnerContainer:{
    marginTop:10,
    // borderWidth:0.5,
    // borderColor:"black",
    // borderStyle:"dashed",
    paddingVertical:10,
    flexDirection:"row",
    flexWrap:"wrap",
    
    
  },
  InterestItem:{
    // height:200,
    // width:200,
    marginHorizontal:2,
    marginVertical:5,
    borderRadius:10,
    position:'relative',
    elevation:20,
    
  },
  interestImage:{
    width:"100%",
    height:"100%",
    borderRadius:10
  },
  interestNameContainer:{
   position:"absolute",
   bottom:0,
   height:"20%",
   backgroundColor:"white",
   width:"100%",
   borderBottomLeftRadius:10,
   borderBottomRightRadius:10,
   opacity:0.9
  },
  interestName:{

  }
})


export default Profile