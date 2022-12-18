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
    <Filters />
    <Games />
    <Footer />
  </SafeAreaView>
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: '#ffffff'
  },
  body: {
    backgroundColor: "#e9e9e9",
    flex: 1,
  }
});