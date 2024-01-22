import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppText from "../components/typo/AppText";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import AppSubmitButton from "../components/forms/AppSubmitButton";
import colors from "../config/color";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

const LoginScreen = ({ navigation }) => {
  return (
    <Screen>
      <View
        style={{
          width: "100%",
          backgroundColor: "white",
          height: "100%",
          padding: 10,
          gap: 30,
        }}
      >
        <View
          style={{
            width: "100%",
            height: 100,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            marginTop: 50,
            gap: 15,
          }}
        >
          <AppText
            value={"Welcome back!"}
            size={30}
            color={"#000"}
            bold={true}
          />
          <AppText
            value={
              "Login back to your account to continue using our app  to make your favourite dishes."
            }
            size={20}
            color={"gray"}
            bold={false}
          />
        </View>
        <AppForm
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            // navigation.navigate("Home");
          }}
        >
          <AppFormField
            name="email"
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <AppFormField
            name="password"
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="default"
            textContentType="password"
            secureTextEntry={true}
          />

          <AppSubmitButton title={"Login"} />
        </AppForm>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            gap: 10,
          }}
        >
          <AppText value={"Don't have an account?"} size={15} color={"gray"} />
          <AppText
            value={"Sign up"}
            size={15}
            color={colors["fire-engine-red"]}
            bold={false}
            onPress={() => navigation.navigate("Register")}
          />
        </View>
      </View>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
