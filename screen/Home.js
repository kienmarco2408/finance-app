import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <View style={styles.totalIncome}>
          <Text style={styles.totalIncomeText}>Tổng thu nhập</Text>
          <Text style={styles.totalIncomeMoney}>120.000.000</Text>
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
            <View style={styles.icon}>
              <TouchableOpacity style={styles.save}>
                <Image
                  style={styles.billIcon}
                  source={require("../storages/icon/save.png")}
                />
              </TouchableOpacity>
              <Text style={styles.iconText}>Mục tiêu tiết kiệm</Text>
            </View>
            <View style={styles.icon}>
              <TouchableOpacity style={styles.history}>
                <Image
                  style={styles.billIcon}
                  source={require("../storages/icon/history.png")}
                />
              </TouchableOpacity>
              <Text style={styles.iconText}>Lịch sử giao dịch</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.content}>
          <Text style={styles.saveText}>Tiết kiệm</Text>
          <View style={styles.viewall}>
            <TouchableOpacity style={styles.viewallButton}>
              <Text style={styles.viewallText}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.saveProgess}>
          <TouchableOpacity
            style={styles.buy}
            onPress={() => {
              navigation.navigate("FundDetail");
            }}
          >
            <View style={styles.productInformation}>
              <Text style={styles.productName}>Macbook Pro M1</Text>
              <Text style={styles.productPrice}>12.000.000đ</Text>
              <Text style={styles.productFirstPrice}>24.000.000đ</Text>
              <Progress.Bar
                progress={0.4}
                width={180}
                color="red"
                borderColor="#CEDFBC"
              />
            </View>
            <SimpleLineIcons name="arrow-right" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buy}
            onPress={() => {
              navigation.navigate("FundDetail");
            }}
          >
            <View style={styles.productInformation}>
              <Text style={styles.productName}>Đi Thái Lan</Text>
              <Text style={styles.productPrice}>4.000.000đ</Text>
              <Text style={styles.productFirstPrice}>7.000.000đ</Text>
              <Progress.Bar
                progress={0.7}
                width={180}
                color="green"
                borderColor="#CEDFBC"
              />
            </View>
            <SimpleLineIcons name="arrow-right" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.providentFund}>
          <View style={styles.providentFundCircle}>
            <Image
              style={styles.providentFundImage}
              source={require("../storages/icon/burger.png")}
            />
          </View>
          <View style={styles.providentFundComponent}>
            <Text style={styles.providentFundText}>Quỹ tiết kiệm</Text>
            <Text style={styles.providentFundAddText}>Thêm quỹ tiết kiệm</Text>
          </View>
          <TouchableOpacity>
            <AntDesign
              onPress={() => {
                navigation.navigate("AddFund");
              }}
              style={styles.providentFundIcon}
              name="plus"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  totalIncome: {
    height: 86,
    gap: 4,
    top: 83,
    marginBottom: 80,
  },
  totalIncomeText: {
    alignSelf: "center",
    color: "#91919F",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 22,
  },
  totalIncomeMoney: {
    alignSelf: "center",
    color: "#161719",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 40,
    lineHeight: 60,
  },
  header: {
    width: 430,
    height: 346,
    borderRadius: 20,
    backgroundColor: "#FFCAD4",
  },
  menuHeader: {
    width: 430,
    height: 323,
    borderRadius: 20,
    gap: 21,
    marginTop: 20,
    backgroundColor: "#313131",
  },
  headerFund: {
    width: 400,
    height: 170,
    top: 24,
    left: 8,
    borderRadius: 20,
    gap: 10,
    backgroundColor: "#F4F7FF",
    marginLeft: 9,
    flexDirection: "row",
  },
  fundIn: {
    width: 190,
    height: 160,
    borderRadius: 20,
    marginLeft: 5,
    marginTop: 5,
    backgroundColor: "#F7C45E",
  },
  iconFundIn: {
    marginLeft: 150,
    marginTop: 10,
  },
  fundInTextCompoment: {
    width: 150,
    height: 22,
    top: 10,
    left: 20,
    alignItems: "center",
  },
  fundInText: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 22,
  },
  fundInMoneyCompoment: {
    width: 155,
    height: 41,
    top: 15,
    left: 20,
    alignItems: "center",
  },
  fundInMoney: {
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: 25,
    lineHeight: 41,
  },
  fundInIcon: {
    flexDirection: "row",
    backgroundColor: "#F4F7FF",
    width: 190,
    height: 45,
    top: 22,
    borderRadius: 16,
  },
  imageFundIn: {
    marginLeft: 30,
    marginTop: 5,
  },
  fundInIconText: {
    marginTop: 12,
    marginLeft: 20,
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 20,
  },
  fund: {
    width: 190,
    height: 160,
    borderRadius: 20,
    marginTop: 5,
    backgroundColor: "#324EE8",
  },
  iconFund: {
    marginLeft: 150,
    marginTop: 10,
  },
  fundTextCompoment: {
    width: 150,
    height: 22,
    top: 10,
    left: 20,
    alignItems: "center",
  },
  fundText: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 22,
    color: "#FFF",
  },
  fundMoneyCompoment: {
    width: 155,
    height: 41,
    top: 15,
    left: 20,
    alignItems: "center",
  },
  fundMoney: {
    fontStyle: "normal",
    fontWeight: 900,
    fontSize: 25,
    lineHeight: 41,
    color: "#FFF",
  },
  imageFund: {
    marginLeft: 30,
    marginTop: 5,
    top: 5,
  },
  fundIconText: {
    marginTop: 12,
    marginLeft: 20,
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 20,
  },
  headerIcon: {
    width: 375,
    borderRadius: 20,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 60,
  },
  icon: {
    width: 95,
    height: 85,
    marginHorizontal: 10,
  },
  billIcon: {
    width: 44,
    height: 44,
    marginLeft: 13,
  },
  iconText: {
    color: "#FFF",
    width: 70,
    height: 40,
    marginTop: 5,
    textAlign: "center",
  },
  body: {},
  content: {
    flexDirection: "row",
    width: 430,
    height: 56,
    gap: 10,
    top: 180,
  },
  saveText: {
    width: 227,
    height: 30,
    top: 8,
    left: 15,
    color: "#292B2D",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: 20,
    lineHeight: 30,
  },
  viewallButton: {
    width: 100,
    height: 35,
    left: 70,
    top: 8,
    borderRadius: 40,
    gap: 10,
    backgroundColor: "#C3C3C34D",
  },
  viewallText: {
    width: 70,
    height: 20,
    top: 8,
    left: 16,
    color: "#828282",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: 14,
    lineHeight: 18,
  },
  saveProgess: {
    top: 180,
    left: 10,
    flexDirection: "row",
  },
  buy: {
    flexDirection: "row",
    width: 200,
  },
  productInformation: {
    left: 20,
    width: 170,
    marginBottom: 5,
  },
  productName: {
    width: 120,
    height: 20,
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 18,
    color: "#707070",
    marginBottom: 5,
  },
  productPrice: {
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 23,
    marginBottom: 5,
  },
  productFirstPrice: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 18,
    color: "#C3C3C3",
    marginBottom: 10,
  },
  providentFund: {
    width: 380,
    borderRadius: 24,
    backgroundColor: "#FF724D",
    height: 90,
    marginTop: 200,
    left: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  providentFundCircle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#212325",
    marginLeft: 18,
  },
  providentFundImage: {
    alignItems: "center",
    justifyContent: "center",
    bottom: 3,
    right: 2,
  },
  providentFundComponent: {
    width: 120,
    height: 60,
    justifyContent: "space-between",
    gap: 11,
    left: -25,
  },
  providentFundText: {
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 22,
    color: "#FFF",
    marginBottom: 5,
    width: 100,
  },
  providentFundAddText: {
    ontStyle: "normal",
    fontWeight: 300,
    fontSize: 14,
    lineHeight: 18,
    color: "#FFF",
    width: 130,
  },
  providentFundIcon: {
    marginRight: 45,
  },
});
