import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const FundCard = () => {
  const card = [
    {
      id: 1,
      title: "Nhà của chúng mình",
      money: "1.000.000",
      members: "+5 thành viên",
      color: "#F9DC5C",
    },
    {
      id: 2,
      title: "Quỹ văn phòng",
      money: "500.000",
      members: "+9 thành viên",
      color: "#F7C45E",
    },
  ];
  return card.map((item, index) => {
    return (
      <View
        key={index}
        style={{
          width: 370,
          height: 155,
          backgroundColor: item.color,
          borderRadius: 35,
          justifyContent: "center",
          marginTop: 15,
        }}
      >
        <View style={{ marginHorizontal: "4%", marginVertical: "5%" }}>
          <Text style={{ fontWeight: "900", fontSize: 18, marginBottom: "3%" }}>
            {item.title}
          </Text>
          <Text style={{ fontWeight: "300" }}>
            Ngân sách còn:{" "}
            <Text style={{ fontWeight: "700" }}>{item.money}đ</Text>
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: "4%",
          }}
        >
          <Image source={require("../storages/home/groupavt.png")} />
          <View
            style={{
              width: 101,
              height: 40,
              backgroundColor: "#000000",
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 12, fontWeight: "700" }}>
              {item.members}
            </Text>
          </View>
        </View>
      </View>
    );
  });
};

export default FundCard;

const styles = StyleSheet.create({});
