import React from "react";
import { Formik } from "formik";
import { View } from "react-native-animatable";
import { TextInput, Button } from "react-native-paper";
import { Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import axios from "axios";
export default function LoginInputs({ navigation }) {
  return (
    <View>
      <KeyboardAvoidingView behavior="position" disabled>
        <View
          style={{ marginTop: 50, marginLeft: "auto", marginRight: "auto" }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#CC7575",
              marginTop: 150,
            }}
          >
            Welcome To Nany App !
          </Text>
        </View>
        <View>
          <Formik
            initialValues={{
              Email: "",
              password: "",
            }}
            onSubmit={(values) => {
              axios
                .post("http://192.168.1.65:5000/login", values)
                .then(function (res) {
                  console.log(res);
                  if (res.data === "User authenticated") {
                    navigation.navigate("AllNany");
                  } else {
                    if (res.data === "User not exist") {
                      alert(" User does not exist");
                    }
                  }
                })
                .catch(function (error) {
                  console.log(error);
                });
            }}
          >
            {(props) => (
              <View>
                {/* Email input */}
                <TextInput
                  placeholder="enter email "
                  onChangeText={props.handleChange("Email")}
                  value={props.values.Email}
                  onBlur={function ValidateEmail(mail) {
                    if (
                      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
                        props.values.Email
                      )
                    ) {
                      return true;
                    }
                    alert("You have entered an invalid email address!");
                    return false;
                  }}
                ></TextInput>
                {/* password input  */}
                <TextInput
                  placeholder="password"
                  secureTextEntry={true}
                  onChangeText={props.handleChange("password")}
                  value={props.values.password}
                 
                ></TextInput>

                {/* submit bttn  */}
                <Button
                  title="login"
                  mode="contained"
                  onPress={props.handleSubmit}
                  Text="Login"
                />
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
const style = StyleSheet.create({
  title: {
    color: "#8E9BEA",
    textAlign: "center",
    marginTop: 50,
    fontSize: 30,
    fontWeight: "bold",
  },
  center: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 30,
  },
  textButton: {
    width: 140,
    padding: 10,
    fontSize: 20,
    marginTop: 100,
    marginLeft: 100,
    fontWeight: "bold",
    borderRadius: 30,
    color: "white",
    textAlign: "center",
    backgroundColor: "#CC7575",
  },
});
