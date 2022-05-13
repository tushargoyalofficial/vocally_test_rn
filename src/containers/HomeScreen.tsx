import React, { FC, memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>This is Home Screen!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightpink'
  },
  headline: {
    fontSize: 18,
    fontWeight: "600",
    color: 'red'
  }
})

export default memo(HomeScreen);
