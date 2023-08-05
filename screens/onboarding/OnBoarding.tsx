//@ts-ignore no type definition
import Onboarding from 'react-native-onboarding-swiper';
import { View, useWindowDimensions, Button, Text, SafeAreaView } from 'react-native'
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';




type Props = {}

const OnBoarding = (props: Props) => {

    const {width} = useWindowDimensions();
    const lottiewidth = width * 0.9;

    const [merchant, setmerchant] = useState(false);

    const navigation = useNavigation();

  return (
    <View className="h-full">
      {
        !merchant ? (
          <Onboarding
        onDone={() => navigation.navigate("Welcome")}
        containerStyles={{ paddingVertical: 0 }}
        pages={[
          {
            backgroundColor: "steelblue",         
            image: (
              <View className="">
                <LottieView style={{ height: 200, width: width }}
                  source={require("../../assets/peoplemeet.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            
            title: "Meet New People Around You",
            subtitle: "Find people who share your interests nearby or a whole new city of your choice",
          },
          {
            backgroundColor: "orange",
            image: (
                <View className="">
                  <LottieView style={{ height: width, width: lottiewidth }}
                    source={require("../../assets/eventplanning.json")}
                    autoPlay
                    loop
                  />
                </View>
              ),
            title: "Organize your Events",
            subtitle: "Setup and organize your events with other users on leenks to earn bonuses",
          },
          {
            backgroundColor: "silver",
            image: (
                <View className="">
                  <LottieView style={{ height: width, width: lottiewidth }}
                    source={require("../../assets/shopanimation.json")}
                    autoPlay
                    loop
                  />
                </View>
              ),
            title: "Get Paid for selling your Goods or service on leenks",
            subtitle: (
              <Button
                title={'Get Started'}
                onPress={() => {
                  setmerchant(true);
                }}
              />
            ),
          },
        ]}
      />
        )
        : (
          <SafeAreaView >
            <Text 
            onPress={() => {
                  setmerchant(false);
                }}>
                Get Started as a Merchant
            </Text>
          </SafeAreaView>
        )
      }
    </View>
  );
}

export default OnBoarding