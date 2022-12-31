import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import Header from "./components/header";
import Games from "./components/games";
import Footer from "./components/footer";
import Filters from "./components/filters";

export default function Home() {
  return <SafeAreaView style={styles.body}>
    <View style={styles.header}>
      <Header />
    </View>
    <View style={styles.filters}>
      <Filters />
    </View>
    <Games />
    <Footer />
  </SafeAreaView>
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderBottomWidth: 0.4,
    borderColor: "rgba(0,0,0,0.3)",
  },
  body: {
    backgroundColor: "#e8e8e8",
    flex: 1,
  },
  filters: {  }
});