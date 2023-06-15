import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import RootStack from "./router/RootStack";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const slides = [
  {
    id: 1,
    title: "Quản lý và phân tích chi tiêu hiệu quả",
  },
  {
    id: 2,
    title: "Lưu trữ giao dịch của bạn theo thời gian",
  },
  {
    id: 3,
    title: "Chia tiền nhóm",
    content:
      "Quản lý chi tiêu không còn là nỗi ám ảnh hàng tháng của nhóm/ phòng của bạn nữa (đặc biệt nếu bạn là sinh viên đi học xa)",
  },
];

export default function App() {
  // const [showHomePage, setshowHomePage] = useState(false);
  // const [currentPage, setcurrentPage] = useState(0);

  // const RenderItem = ({ item }) => {
  //   return <View></View>;
  // };

  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <StatusBar backgroundColor="black" style={{ paddingBottom: "5%" }} />
      <RootStack />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
