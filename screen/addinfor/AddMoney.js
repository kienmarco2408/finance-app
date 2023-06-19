import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const AddMoney = () => {
  return (
    <View style={{ backgroundColor: "#324EE8", height: "100%" }}>
      <View
        style={{
          paddingTop: 60,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AntDesign
          name="arrowleft"
          size={24}
          color="white"
          style={{ right: 60 }}
        />
        <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
          Thu nhập cố định/tháng
        </Text>
      </View>
      <View
        style={{
          marginTop: 187,
          height: 90,
          borderBottomWidth: 1,
          width: "85%",
          alignSelf: "center",
        }}
      >
        <Text>Khoản thu 1</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TextInput />
          <Text>VND</Text>
        </View>
      </View>
    </View>
  );
};

export default AddMoney;

const styles = StyleSheet.create({});
