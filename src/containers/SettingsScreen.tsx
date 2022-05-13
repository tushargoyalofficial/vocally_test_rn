import React, { FC, memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SettingsScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>This is Settings Screen!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
  headline: {
    fontSize: 18,
    fontWeight: "600",
    color: 'orange'
  }
})

export default memo(SettingsScreen);
