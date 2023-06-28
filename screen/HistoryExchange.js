import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const HistoryExchange = () => {
  return (
    <View>
      <View
        style={{
          width: "100%",
          height: 282,
          backgroundColor: "#FD3C4A",
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 60,
            justifyContent: "space-around",
          }}
        >
          <AntDesign name="arrowleft" size={24} color="#FFFFFF" />
          <Text style={{ fontSize: 18, color: "#FFFFFF", fontWeight: "600" }}>
            Chi tiết giao dịch
          </Text>
          <Ionicons name="trash" size={24} color="#FFFFFF" />
        </View>
        <Text
          style={{
            fontSize: 40,
            color: "#FFFFFF",
            fontWeight: "500",
            textAlign: "center",
            marginTop: 50,
          }}
        >
          -35.000đ
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#FFFFFF",
            fontWeight: "500",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Bánh mì sáng
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginHorizontal: "10%",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: "#FFFFFF",
              fontWeight: "500",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            Hôm nay, thứ 6, ngày 12 tháng 5 năm 2023
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: "#FFFFFF",
              fontWeight: "500",
              textAlign: "center",
              marginTop: 10,
            }}
          >
            8:00
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            height: 70,
            width: 343,
            backgroundColor: "white",
            borderRadius: 12,
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#91919F" }}>Loại</Text>
            <Text style={{ fontWeight: "700", marginTop: 10 }}>Khoản chi</Text>
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#91919F" }}>Danh mục</Text>
            <Text style={{ fontWeight: "700", marginTop: 10 }}>Ăn uống</Text>
          </View>
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#91919F" }}>Nguồn chi</Text>
            <Text style={{ fontWeight: "700", marginTop: 10 }}>VP Bank</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HistoryExchange;

const styles = StyleSheet.create({});
