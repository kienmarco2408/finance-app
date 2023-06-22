import { StyleSheet, Text, View } from "react-native";
import React from "react";

const demo = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#FFCAD4",
          width: "100%",
          height: 507,
          borderRadius: 20,
        }}
      >
        <View style={{ alignItems: "center", marginTop: 83 }}>
          <Text style={{ fontSize: 16, color: "#91919F", height: 22 }}>
            Tổng thu nhập
          </Text>
          <Text
            style={{
              fontSize: 40,
              color: "#161719",
              fontWeight: "500",
              height: 60,
            }}
          >
            120.000.000
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            height: 323,
            backgroundColor: "#313131",
            marginTop: 18,
            borderRadius: 20,
          }}
        >
          <View
            style={{
              width: "90%",
              height: 190,
              backgroundColor: "#F4F7FF",
              borderRadius: 20,
              alignSelf: "center",
              marginTop: 24,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "45%",
                height: 170,
                backgroundColor: "#F7C45E",
                borderRadius: 20,
                alignItems: "center",
              }}
            >
              <Feather
                name="plus-square"
                size={24}
                color="black"
                style={{
                  alignSelf: "flex-end",
                  marginTop: 10,
                  marginRight: 10,
                }}
              />
              <Text style={{ fontSize: 16, height: 22 }}>Khoản thu</Text>
              <Text
                style={{
                  fontSize: 27,
                  color: "#161719",
                  fontWeight: "700",
                  height: 41,
                }}
              >
                25.000.000
              </Text>
              <View
                style={{
                  backgroundColor: "rgba(244, 247, 255, 1)",
                  width: "100%",
                  height: 55,
                  borderRadius: 16,
                  marginTop: 18,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image source={require("../storages/icon/income.png")} />
                <Text style={{ marginTop: 12, marginLeft: 19, fontSize: 16 }}>
                  Tháng 6
                </Text>
              </View>
            </View>
            <View
              style={{
                width: "45%",
                height: 170,
                backgroundColor: "#324EE8",
                borderRadius: 20,
                alignItems: "center",
              }}
            >
              <Feather
                name="edit"
                size={24}
                color="white"
                style={{
                  alignSelf: "flex-end",
                  marginTop: 10,
                  marginRight: 10,
                }}
              />
              <Text style={{ fontSize: 16, height: 22, color: "white" }}>
                Khoản thu
              </Text>
              <Text
                style={{
                  fontSize: 27,
                  color: "white",
                  fontWeight: "700",
                  height: 41,
                }}
              >
                25.000.000
              </Text>
              <View
                style={{
                  backgroundColor: "rgba(244, 247, 255, 1)",
                  width: "100%",
                  height: 55,
                  borderRadius: 16,
                  marginTop: 18,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image source={require("../storages/icon/fund.png")} />
                <Text
                  style={{
                    marginTop: 12,
                    marginLeft: 19,
                    fontSize: 16,
                    color: "#324EE8",
                  }}
                >
                  Tháng 6
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginHorizontal: 30,
              marginTop: 15,
            }}
          >
            <TouchableOpacity style={{ alignItems: "center" }}>
              <Image source={require("../storages/icon/bill.png")} />
              <Text
                style={{ color: "#FFFFFF", width: 70, textAlign: "center" }}
              >
                Lập nhóm chia bill
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: "center" }}>
              <Image source={require("../storages/icon/save.png")} />
              <Text
                style={{ color: "#FFFFFF", width: 70, textAlign: "center" }}
              >
                Lập nhóm chia bill
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ alignItems: "center" }}>
              <Image source={require("../storages/icon/history.png")} />
              <Text
                style={{ color: "#FFFFFF", width: 70, textAlign: "center" }}
              >
                Lập nhóm chia bill
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default demo;

const styles = StyleSheet.create({});
