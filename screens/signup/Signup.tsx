import * as React from "react";
import { Text, TextInput, TouchableOpacity, View, SafeAreaView } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { createUser } from "./features";
import { useNavigation } from "@react-navigation/native";

export default function SignUp() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const navigation = useNavigation();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstname, setfirstname] = React.useState("")
  const [lastname, setlastname] = React.useState("")
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");

  // start the sign up process.
  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // This verifies the user using email code that is delivered.
  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
      await createUser(firstname, lastname, completeSignUp.createdSessionId)
      console.log("Created User",completeSignUp.createdSessionId)

    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };



  return (
    <SafeAreaView>
      {!pendingVerification && (
        <View className="px-2 py-4">
          <View className="mb-4">
            <TextInput
              className="border p-2 rounded-lg"
              autoCapitalize="none"
              value={emailAddress}
              placeholder="Email..."
              onChangeText={(email) => setEmailAddress(email)}
            />
          </View>

          <View className="mb-4">
            <TextInput
              className="border p-2 rounded-lg"
              value={password}
              placeholder="Password..."
              placeholderTextColor="#000"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          <View className="mb-4">
            <TextInput
              className="border p-2 rounded-lg"
              value={firstname}
              placeholder="First name"
              placeholderTextColor="#000"
              secureTextEntry={false}
              onChangeText={(firstname) => setfirstname(firstname)}
            />
          </View>
          <View className="mb-4">
            <TextInput
              className="border p-2 rounded-lg"
              value={lastname}
              placeholder="Last name"
              placeholderTextColor="#000"
              secureTextEntry={false}
              onChangeText={(lastname) => setlastname(lastname)}
            />
          </View>

          <TouchableOpacity onPress={onSignUpPress}>
            <Text>Sign up</Text>
          </TouchableOpacity>
        </View>
      )}
      {pendingVerification && (
        <View>
          <View>
            <TextInput
              value={code}
              placeholder="Code..."
              onChangeText={(code) => setCode(code)}
            />
          </View>
          <TouchableOpacity onPress={onPressVerify}>
            <Text>Verify Email</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}