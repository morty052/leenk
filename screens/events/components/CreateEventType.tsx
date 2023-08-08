import { View, Text , SafeAreaView, TextInput, Button} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import Mainstyles,{utilityStyles} from '../../../styles';
import { useState, useRef } from 'react';

//@ts-ignore no type definition
import Onboarding from 'react-native-onboarding-swiper';

type Props = {
    event:any,
    setevent:any,
    eventTitle:string,
}

type EventProps = {
   eventname:string,
   eventtype:object,
   eventvenue:string,
   eventpricingtype:object,
   eventprice?:number,
   eventdescription:string,
   eventimage:string,
   host:object,
   eventdate:string
}

const CreateEventType = ({event, setevent, eventTitle, }: Props) => {
    
    if (!eventTitle) {  
        return null
    }

    class Event {
         eventname
         eventtype
         eventvenue
         eventpricingtype
         eventprice
         eventdescription
         eventimage
         host
         eventdate

        constructor({eventname, eventdate, eventtype, eventvenue, eventpricingtype, eventprice,eventdescription, eventimage, host}:EventProps){
           this.eventname = eventname
           this.eventtype = eventtype
           this.eventvenue = eventvenue
           this.eventpricingtype = eventpricingtype
           this.eventdescription = eventdescription
           this.eventimage = eventimage
           this.eventprice = eventprice
           this.host = host
           this.eventdate = eventdate
        }
        survey(){
            switch (true) {
                case this.eventprice && this.eventprice > 100:
                    console.log(this.eventprice, "is not a good price for this event")    
                    break;
                case this.eventprice && this.eventprice <= 20:
                    console.log(this.eventprice, "is a very nice price for this event")    
                    break;
            
                default:
                    break;
            }
            
        }
    }

    const partytime = new Event({
        eventname:"partyTime",
        eventtype:{
            party:true
        },
        eventvenue:"",
        eventpricingtype:{
            paid:true
        },
        eventimage:"",
        eventdescription:"",
        eventprice:20,
        host:{},
        eventdate:""



    })

    // const geteventsurvey = new Promise((resolve, reject)=>{
    //     let file = false

    //     if (file) {
    //         resolve("loaded")
    //     }

    //     else if (!file) {
    //         reject("No file")
    //     }
    // })

    const handlesurvey = () => {
        geteventsurvey.then(res => console.log(res)).catch((err) => console.log(err))
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
          <Text style={Mainstyles.bigText}>What Type of event are you hosting ?</Text>
          <View style={utilityStyles.topPadding}>
          <Text style={Mainstyles.subText}>Please select an event type from one of the options below.</Text>
          </View>
  
          {/* SELECT EVENT TYPES SECTION */}
          <View style={utilityStyles.LargePadding} >
            <View>
            
            {/* EVENT TYPE */}
            <View style={utilityStyles.topPadding}>
            <View style={utilityStyles.flexSpread} >
            <Text style={Mainstyles.primaryText}>
                Party
            </Text>
            <View >
                <Entypo 
                  onPress={()=> setevent((prev:any)=>(
                    {
                     ...prev,
                     eventtype:{
                        party:true,
                        onlineevent:false,
                        tutorial:false,
                        livestream:false,
                      }
                    }
                ))} name='plus' size={32}/>
            </View>
            </View>
            </View>

             {/* EVENT TYPE */}
             <View style={utilityStyles.topPadding}>
            <View style={utilityStyles.flexSpread} >
            <Text style={Mainstyles.primaryText}>
               Live Online Event
            </Text>
            <View >
                <Entypo onPress={()=> setevent((prev:any)=>(
                    {
                     ...prev,
                     eventtype:{
                        party:false,
                        onlineevent:true,
                        tutorial:false,
                        livestream:false,
                      }
                    }
                ))}  name='plus' size={32}/>
            </View>
            </View>
            </View>

             {/* EVENT TYPE */}
             <View style={utilityStyles.topPadding}>
            <View style={utilityStyles.flexSpread} >
            <Text style={Mainstyles.primaryText}>
               Class
            </Text>
            <View >
                <Entypo onPress={()=> setevent((prev:any)=>(
                    {
                     ...prev,
                     eventtype:{
                        party:false,
                        onlineevent:false,
                        tutorial:true,
                        livestream:false,
                      }
                    }
                ))} name='plus' size={32}/>
            </View>
            </View>
            </View>

            {/* EVENT TYPE */}
            <View style={utilityStyles.topPadding}>
            <View style={utilityStyles.flexSpread} >
            <Text style={Mainstyles.primaryText}>
               Live Watch Along
            </Text>
            <View >
                <Entypo onPress={()=> setevent((prev:any)=>(
                    {
                     ...prev,
                     eventtype:{
                        party:false,
                        onlineevent:false,
                        tutorial:false,
                        livestream:true,
                      }
                    }
                ))} name='plus' size={32}/>
            </View>
            </View>
            </View>

             {/* EVENT TYPE */}
             <View style={utilityStyles.topPadding}>
            <View style={utilityStyles.flexSpread} >
            <Text style={Mainstyles.primaryText}>
               Wager
            </Text>
            <View >
                <Entypo onPress={()=> setevent((prev:any)=>(
                    {
                     ...prev,
                     eventtype:{
                        party:false,
                        onlineevent:false,
                        tutorial:false,
                        livestream:false,
                        wager:true
                      }
                    }
                ))} name='plus' size={32}/>
            </View>
            </View>
            </View>
            
            </View>
          </View>


        </View>


        {/* <Button onPress={()=>  handlesurvey()} title='display event'/> */}
      </SafeAreaView>
      )
}

export default CreateEventType