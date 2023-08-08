import {Modal, useWindowDimensions, Text, Pressable} from 'react-native'
import Mainstyles from '../../../styles';
import { useState, useRef } from 'react';
import CreateEventTitle from './CreateEventTitle';
import CreateEventType from './CreateEventType';
import CreateEventPricingType from './CreateEventPricingType';
import CreateEventDescription from './CreateEventDescription';
import CreateEventDate from './CreateEventDate';
import CreateEventImage from './CreateEventImage';
import CreateEventPreview from './CreateEventPreview';



//@ts-ignore no type definition
import Onboarding from 'react-native-onboarding-swiper';

type Props = {
    createEvent:Function,
    modalOpen:boolean,
    setModalOpen:Function
}

const CreateEventScreen = ({createEvent, modalOpen, setModalOpen}: Props) => {
  const [event, setevent] = useState({
    eventname:"",
    eventtype:{
      party:false,
      onlineevent:false,
      tutorial:false,
      livestream:false,
      wager:false
    },
    eventpricingtype:{
      free:false,
      paid:false,
      donation:false,
      invitation:false
    },
    eventdescription:"",
    eventimage:"",
    eventprice:""
  })
  const [pageindex, setpageindex] = useState<number>(0)
  
  const onBoardingRef = useRef<Onboarding>(null)
  
  const getPageIndex = (pageIndex:number) => {
    console.log(pageIndex)
    setpageindex(pageIndex)
  }

  const NextButton = () =>{
   
    const handleNext = () => {
      switch (pageindex) {
        case 0:
         console.log("This is page1")
         console.log(event)  
         onBoardingRef.current.goNext()
          break;
        case 1:
         console.log("This is page2")
         console.log(event) 
         onBoardingRef.current.goNext() 
          break;

        case 2:
         console.log("This is page3")
         console.log(event) 
         onBoardingRef.current.goNext() 
          break;

        case 3:
         console.log("This is page4")
         console.log(event) 
         onBoardingRef.current.goNext() 
          break;

        case 4:
         console.log("This is page5")
         console.log(event) 
         onBoardingRef.current.goNext() 
          break;

        case 5:
         console.log("This is page6")
         console.log(event) 
         onBoardingRef.current.goNext() 
          break;
      
        default:
          break;
      }
      // onBoardingRef.current.goNext()
    }

    return(
      <Pressable onPress={()=>  handleNext()}>
        <Text>Next</Text>
      </Pressable>
    )
  }

  const {width} = useWindowDimensions()



  return (
    <Modal visible={modalOpen} className="bg-gray-200">
      <Onboarding
         ref={onBoardingRef}
         nextLabel={<NextButton/>}
         pageIndexCallback={(n:number)=> getPageIndex(n)}
         onSkip={() => setModalOpen(false)}
        // onDone={() => navigation.navigate("Welcome")}
         
        containerStyles={{ paddingVertical: 0, paddingHorizontal: 0 }}
        pages={[
          {
            backgroundColor: "rgb(229 231 235)",
            image: (
              <CreateEventTitle event={event} setevent={setevent} />
            ),
            onnext:()=>{console.log("next")},
            nextLabel:"eureka",
            title: "",
            subtitle:
              "",
           
          },
          {
            backgroundColor: "rgb(229 231 235)",
            image: (
              <CreateEventType  eventTitle={event.eventname} event={event} setevent={setevent}/>
            ),

            title: "",
            subtitle:
              "",
          },
          {
            backgroundColor: "rgb(229 231 235)",
            image: (
              <CreateEventPricingType event={event} setevent={setevent}/>
            ),

            title: "",
            subtitle:
              "",
          },
          {
            backgroundColor: "rgb(229 231 235)",
            image: (
              <CreateEventDescription event={event} setevent={setevent} />
            ),

            title: "",
            subtitle:
              "",
          },
          {
            backgroundColor: "rgb(229 231 235)",
            image: (
              <CreateEventDate event={event} setevent={setevent} />
            ),

            title: "",
            subtitle:
              "",
          },
          {
            backgroundColor: "rgb(229 231 235)",
            image: (
              <CreateEventImage event={event} setevent={setevent}/>
            ),

            title: "",
            subtitle:
              "",
          },
          {
            backgroundColor: "rgb(229 231 235)",
            image: (
              <CreateEventPreview event={event} setevent={setevent}/>
            ),

            title: "",
            subtitle:
              "",
          },
          
        ]}
      />
    </Modal>
  );
}

export default CreateEventScreen