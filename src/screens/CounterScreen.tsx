import React, { useState } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Fab } from '../components/Fab'

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0)

  const handlePlus = () => {
    setCounter(counter + 1)
  }

  const handleLess = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Contador: {counter}
      </Text>
      <Fab
        title={'+1'}
        position={'br'}
        onPress={handlePlus}
      />
      <Fab
        title={'-1'}
        position={'bl'}
        onPress={handleLess}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    top: -15
  }
})
