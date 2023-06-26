import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import { Modal } from "react-native-paper";
import SimpleModal from "../../component/SimpleModal";

export default FundDetail = () => {
  const navigation = useNavigation();
  const [isModalVisible, setisModalVisible] = useState(false);
  const changeModalVisible = (bool) => {
    setisModalVisible(bool);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <View style={styles.headerBar}>
          <AntDesign
            onPress={() => {
              navigation.navigate("Fund");
            }}
            name="close"
            size={26}
            color="black"
          />
          <Text style={styles.headerText}>Chi tiết quỹ tiết kiệm</Text>
          <TouchableOpacity
            style={styles.buttonDelete}
            onPress={() => changeModalVisible(true)}
          >
            <Ionicons name="ios-trash" size={26} color="black" />
            <Modal
              transparent={true}
              animationType="fade"
              visible={isModalVisible}
              nRequestClose={() => changeModalVisible(false)}
            >
              <SimpleModal />
            </Modal>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.name}>
          <Text style={styles.nameText}>Tên</Text>
          <TextInput style={styles.inputName}>
            <Text style={styles.inputText}>Macbook Pro M1</Text>
          </TextInput>
        </View>
        <View style={styles.name}>
          <Text style={styles.nameText}>Mục tiêu</Text>
          <TextInput style={styles.inputGoal}>
            <Text style={styles.inputText}>24.000.000đ</Text>
          </TextInput>
        </View>
        <View style={styles.name}>
          <Text style={styles.nameText}>Mục tiêu tiết kiệm trên một tháng</Text>
          <TextInput style={styles.inputGoal}>
            <Text style={styles.inputText}>4.000.000</Text>
          </TextInput>
        </View>
        <TouchableOpacity style={styles.emoji}>
          <MaterialIcons name="phone-iphone" size={24} color="black" />
          <Text style={styles.emojiText}>Chọn emoji</Text>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View style={styles.saveMoney}>
          <View style={styles.progess}>
            <View style={styles.progessMoney}>
              <Text style={styles.progessMoneyText}>12.000.000đ/3 tháng</Text>
              <Text style={styles.progessMoneySubText}>24.000.000đ</Text>
            </View>
            <Progress.Bar
              progress={0.5}
              width={380}
              color="red"
              borderColor="#CEDFBC"
            />
          </View>
          <View style={styles.addFund}>
            <Text style={styles.addFundText}>Nộp quỹ tháng 5</Text>
            <TextInput
              style={styles.inputFundText}
              placeholder="Nhập số tiền"
            />
            <TouchableOpacity style={styles.updateButton}>
              <Text style={styles.updateText}>Cập nhật quỹ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: 430,
    height: 70,
    padding: 16,
    gap: 64,
  },
  headerBar: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerText: {
    width: 247,
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 25,
    left: 30,
  },
  body: {
    height: 400,
    width: 390,
    left: 20,
    justifyContent: "space-between",
    gap: 10,
  },
  name: {
    width: 390,
    height: 95,
    alignItems: "flex-start",
    padding: 0,
    flexDirection: "column",
  },
  nameText: {
    width: 240,
    height: 20,
    top: 10,
    fontWeight: 300,
    fontSize: 16,
    lineHeight: 20,
  },
  inputName: {
    width: 390,
    height: 60,
    top: 20,
    borderRadius: 16,
    padding: 16,
    gap: 10,
    backgroundColor: "#F1F1FA",
    borderColor: "gray",
    borderWidth: 1,
  },
  inputText: {
    width: 287,
    height: 20,
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 22,
  },
  inputGoal: {
    width: 390,
    height: 60,
    top: 20,
    borderRadius: 16,
    padding: 16,
    gap: 10,
    backgroundColor: "#F5F5F5",
    borderColor: "gray",
    borderWidth: 1,
  },
  emoji: {
    width: 390,
    height: 60,
    top: 20,
    borderRadius: 16,
    padding: 16,
    gap: 10,
    backgroundColor: "#F5F5F5",
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row",
  },
  emojiText: {
    width: 290,
    height: 20,
    top: 2,
    left: 20,
    fontWeight: 300,
    fontSize: 16,
    lineHeight: 20,
  },
  createButton: {
    width: 390,
    height: 60,
    top: 250,
    left: 16,
    borderRadius: 16,
    borderColor: "gray",
    backgroundColor: "#F7C45E",
  },
  createText: {
    width: 72,
    height: 30,
    top: 13,
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 30,
    alignSelf: "center",
    color: "#313131",
  },
  footer: {
    width: "100%",
    height: 370,
    top: 50,
    borderRadius: 25,
    backgroundColor: "#F9DC5C",
  },
  saveMoney: {
    width: 410,
    height: 35,
    left: 20,
    top: 40,
    gap: 6,
  },
  progessMoney: {
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: 10,
  },
  progessMoneyText: {
    width: 170,
    height: 22,
    top: 0.5,
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 22,
    color: "#242424",
  },
  progessMoneySubText: {
    width: 100,
    height: 20,
    top: 5,
    color: "#313131",
    fontSize: 12,
    fontWeight: 300,
    lineHeight: 18,
  },
  addFund: {
    width: 410,
    height: 100,
    top: 20,
  },
  addFundText: {
    width: 200,
    height: 20,
    color: "#313131",
    fontSize: 16,
    fontWeight: 300,
    lineHeight: 19,
  },

  inputFund: {
    width: 280,
    height: 40,
    top: 6,
    left: 20,
  },
  inputFundText: {
    fontSize: 16,
    marginTop: 10,
    color: "#FFFFFF",
    width: 390,
    height: 56,
    backgroundColor: "#E0533D",
    borderRadius: 16,
    paddingLeft: 20,
  },
  updateButton: {
    width: 390,
    height: 60,
    top: 40,
    padding: 8,
    borderRadius: 16,
    gap: 10,
    backgroundColor: "#F4F7FF",
  },
  updateText: {
    textAlign: "center",
    top: 6,
    fontWeight: 500,
    fontSize: 20,
    lineHeight: 30,
  },
});
