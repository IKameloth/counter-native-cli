import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'

interface FabProps {
  title: string
  position: 'br' | 'bl'
  onPress: () => void
}

export const Fab = ({ title, onPress, position = 'br' }: FabProps) => {
  return (
    <View style={[styles.buttonLocation, position === 'br' ? styles.right : styles.left]}>
      <TouchableNativeFeedback onPress={onPress} background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonLocation: {
    position: 'absolute',
    bottom: 25
  },
  left: {
    left: 25
  },
  right: {
    right: 25
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
})