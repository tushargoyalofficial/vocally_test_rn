import React, { FC, memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>This is Proflie Screen!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue'
  },
  headline: {
    fontSize: 18,
    fontWeight: "600",
    color: 'blue'
  }
})

export default memo(ProfileScreen);
