import { View, Text, TextInput, Pressable } from 'react-native'
import {useState} from 'react'
import { useSignIn } from "@clerk/clerk-expo";
import { useNavigation } from '@react-navigation/native';


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
        <View>
          <View>
            <TextInput
              autoCapitalize="none"
              value={emailAddress}
              placeholder="Email..."
              onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
            />
          </View>
    
          <View>
            <TextInput
              value={password}
              placeholder="Password..."
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
    
          <Pressable onPress={()=> signInUser()}>
            <Text>Sign in</Text>
          </Pressable>
        </View>
      );
}

export default SignIn