import { View, Text, TextInput, Pressable } from 'react-native'
import {useState} from 'react'
import { useSignIn } from "@clerk/clerk-expo";
import { useNavigation } from '@react-navigation/native';
import { handleSignin } from './features';
import LottieView from 'lottie-react-native';


type Props = {}

const SignIn = (props: Props) => {

    const { signIn, setActive, isLoaded } = useSignIn();
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    type Route = {
       route:string,
       navigate:Function
    }
    
    const navigate = useNavigation<Route>()

    const signInUser = async () => {

        if (!isLoaded) {
            return
        }

       try {
        const completeSignIn = await signIn.create({
            identifier: emailAddress,
            password,
          });

          // This is an important step,
      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId });
      navigate.navigate("Home")

       } catch (error) {
        console.log(error)
       }
    }

    return (
        <View className=' px-4 bg-white h-full'>
          <View className="h-2/4 ">
          <LottieView style={{flex:1}}
                  source={require("../../assets/hianimation.json")}
                  autoPlay
                  loop
                  
                  
                />
          </View>
          <View className='mb-4'>
            <TextInput
              className='p-4 border rounded-xl border-fuchsia-600'
              autoCapitalize="none"
              value={emailAddress}
              placeholder="Email..."
              onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
            />
          </View>
    
          <View>
            <TextInput
             autoCapitalize='none'
              className='p-4 border rounded-xl border-fuchsia-600'
              value={password}
              placeholder="Password..."
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
    
          <View className="my-6 flex flex-row items-center justify-between">
          <Pressable className='bg-fuchsia-300 py-2 px-8 rounded-xl ' onPress={()=> signInUser()}>
            <Text className='text-2xl text-gray-80c0'>Sign in</Text>
          </Pressable>
          <Pressable className='' onPress={()=> navigate.navigate("Signup")}>
            <Text className='text-lg text-blue-600'> Create new account.</Text>
          </Pressable>
          </View>
        </View>
      );
}

export default SignIn