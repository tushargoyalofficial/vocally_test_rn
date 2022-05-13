import React, { FC, memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NotificationsScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headline}>This is Notifications Screen!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen'
  },
  headline: {
    fontSize: 18,
    fontWeight: "600",
    color: 'green'
  }
})

export default memo(NotificationsScreen);
