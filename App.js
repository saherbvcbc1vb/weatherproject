import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/Components/Tabs'
import { useGetWeather } from './src/hooks/useGetWeather'
import ErrorItem from './src/Components/Erroritem'
const App = () => {
  const [Loading, error, weather] = useGetWeather()
  console.log(Loading, error, weather)
  if (weather && weather.list && !Loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={Styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={'large'} color={'blue'} />

      )}
    </View>
  )
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default App
