import React, { useState, useEffect } from "react";
import axios from "axios";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import TopPic from "./TopPic";
export default function Profile() {
  const [userData, setUserData] = useState({});
  useEffect(() => {
    axios.get("http://localhost:5000/profile").then((res) => {
      console.log(res.data);
      setUserData(res.data);

      //  console.log(nanyList)
    }, []);
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopPic />
        <View style={styles.titleBar}>
          <AntDesign name="menufold" size={24} color="black" />
        </View>
        <View style={{ alignSelf: "center" }}>
          <View style={styles.profileImage}>
            <Image
              source={require("../assets/profile-pic.jpg")}
              style={styles.image}
              resizeMode="center"
            ></Image>

            <View style={styles.active}></View>
          </View>

          <View style={styles.infoContainer}>
            <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>
              <AntDesign name="user" size={24} color="black" />
              {userData.name}
            </Text>
            <View>
              <Text></Text>
            </View>
            <Text style={[styles.text, { color: "#AEB5BC", fontSize: 14 }]}>
              <AntDesign name="mail" size={20} color="black" />
              {userData.email}
            </Text>
            <View>
              <Text></Text>
            </View>
            <Text>
              <AntDesign name="phone" size={24} color="black" />
              {userData.phoneNumber}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
  },
  text: {
    color: "#52575D",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },

  profileImage: {
    marginTop: 90,
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
  },

  active: {
    backgroundColor: "#34FFB9",
    position: "absolute",
    bottom: 28,
    left: 10,
    padding: 4,
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: 10,
  },
});