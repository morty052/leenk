import { View, Text , SafeAreaView, TextInput, Button, Modal, TouchableOpacity} from 'react-native'
import { Entypo } from '@expo/vector-icons';
import Mainstyles,{utilityStyles} from '../../../styles';
import { useState } from 'react';


type Props = {
    event:any,
    setevent:any
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

const CreateEventPricingType = ({event, setevent}: Props) => {

    // const [pricingType, setpricingType] = useState({
    //   free:false,
    //   paid:false,
    //   donation:false,
    //   invitation:false
    // })

    const [pricingType, setpricingType] = useState("")

    const [pricingModal, setpricingModal] = useState(false)

    const handlePricingType = (choice:string) => {

      // const {free, paid, donation, invitation} = pricingType
      
      switch (choice) {
        case "FREE":
          console.log("No need for pricing")
          break;

          case "PAID":
          setpricingModal(true)
          break;

          case "INVITATION":
          console.log("No need for pricing")
          break;

          case "DONATION":
          //HANDLE SPECIAL DONATION PRICING EXCEPTION
          console.log("No need for pricing")
          break;
      
        default:
          break;
      }
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

    const CreateEventPriceModal = () => {

      const [price, setprice] = useState<string | number>()

    const  handlePricingModal = (setevent:any) => {
      setevent((prev:any)=>(
        {
          ...prev,
          eventprice:price
        }
      ))
      console.log(event)
    }

      return(
        <Modal visible={pricingModal}>
        <SafeAreaView>
        <Button onPress={()=>  setpricingModal(false)} title='display event'/>
        <View style={[utilityStyles.tinyTopPadding, utilityStyles.xpadding]}>
          <Text style={Mainstyles.bigText}>Lets set a price for your event.</Text>
          <Text style={Mainstyles.subText}>set a suitable price for tickets to your event.</Text>

          {/* PRICE INPUT */}
          <View style={utilityStyles.mtPadding }>
          <TextInput
           onChangeText={(text)=> setprice(text)}
           style={Mainstyles.input} />
          </View>

          <View style={[utilityStyles.mtPadding, utilityStyles.fcenter]}>
             <TouchableOpacity 
               onPress={()=>  handlePricingModal(setevent)}
               style={Mainstyles.PrimaryButton}>
               <Text style={Mainstyles.PrimaryButtonText}>
                   Set Ticket Price
               </Text>
             </TouchableOpacity>
          </View>
        </View>
        </SafeAreaView>
       </Modal>
      )
    }
    

    return(
      <SafeAreaView className="bg-gray-200 h-full w-full">
       <CreateEventPriceModal/>
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
         
         {/* CREATE TICKET PRICING  CONTAINER */}
        <View style={utilityStyles.basicPadding} >
          {/* Create TICKET PRICING TITLE TEXT */}
          <Text style={Mainstyles.bigText}>Ticket system for this event</Text>
          <View style={utilityStyles.topPadding}>
          <Text style={Mainstyles.subText}>Please select the type of tickets you want for this event from the options below.</Text>
          </View>
  
          {/* SELECT EVENT PRICING SECTION */}
          <View style={utilityStyles.LargePadding} >
            <View>
            
            {/* PRICING TYPE */}
            <View style={utilityStyles.topPadding}>
            <View style={utilityStyles.flexSpread} >
            <Text style={Mainstyles.primaryText}>
                Free Tickets
            </Text>
            <View >
                <Entypo color={pricingType == "FREE" ? "green" : "black"}  
                onPress={() => {
                  // setpricingType((prev) => (
                  //   {
                  //     ...prev,
                  //     free:true
                  //   }
                  // ))
                  handlePricingType("FREE")
                  setpricingType("FREE")
                  setevent((prev:any) => (
                    {
                      ...prev,
                      eventpricingtype:{
                        free:true,
                        paid:false,
                        donation:false,
                        invitation:false
                      }
                    }
                  ))
                }} name='plus' size={32}/>
            </View>
            </View>
            </View>

             {/* PRICING TYPE */}
             <View style={utilityStyles.topPadding}>
            <View style={utilityStyles.flexSpread} >
            <Text style={Mainstyles.primaryText}>
               Paid Tickets
            </Text>
            <View >
                <Entypo color={pricingType == "PAID" ? "green" : "black"}  
                onPress={() => {
                  // setpricingType((prev) => (
                  //   {
                  //     ...prev,
                  //     paid:true
                  //   }
                  // ))
                  handlePricingType("PAID")
                  setpricingType("PAID")
                  setevent((prev:any) => (
                    {
                      ...prev,
                      eventpricingtype:{
                        free:false,
                        paid:true,
                        donation:false,
                        invitation:false
                      }
                    }
                  ))
                }} name='plus' size={32}/>
            </View>
            </View>
            </View>

             {/* PRICING TYPE */}
             <View style={utilityStyles.topPadding}>
            <View style={utilityStyles.flexSpread} >
            <Text style={Mainstyles.primaryText}>
               Donation Tickets
            </Text>
            <View >
                <Entypo color={pricingType == "DONATION" ? "green" : "black"}  
                onPress={() => {
                  // setpricingType((prev) => (
                  //   {
                  //     ...prev,
                  //     donation:true
                  //   }
                  // ))
                  handlePricingType("DONATION")
                  setpricingType("DONATION")
                  setevent((prev:any) => (
                    {
                      ...prev,
                      eventpricingtype:{
                        free:false,
                        paid:false,
                        donation:true,
                        invitation:false
                      }
                    }
                  ))
                }} name='plus' size={32}/>
            </View>
            </View>
            </View>

            {/* PRICING TYPE */}
            <View style={utilityStyles.topPadding}>
            <View style={utilityStyles.flexSpread} >
            <Text style={Mainstyles.primaryText}>
               Free Ticket with invitation
            </Text>
            <View >
                <Entypo color={pricingType == "INVITATION" ? "green" : "black"}    
                onPress={() => {
                  // setpricingType((prev) => (
                  //   {
                  //     ...prev,
                  //     invitation:true
                  //   }
                  // ))
                  handlePricingType("INVITATION")
                  setpricingType("INVITATION")
                  setevent((prev:any) => (
                    {
                      ...prev,
                      eventpricingtype:{
                        free:false,
                        paid:false,
                        donation:false,
                        invitation:true
                      }
                    }
                  ))
                }} name='plus' size={32}/>
            </View>
            </View>
            </View>
            
            </View>
          </View>


        </View>


        {/* <Button onPress={()=>  handlePricingType()} title='display event'/> */}
      </SafeAreaView>
      )
}

export default CreateEventPricingType