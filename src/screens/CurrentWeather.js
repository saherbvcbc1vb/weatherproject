import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'
import RowText from '../Components/RowText'

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    hiLowWrapper,
    hiLow,
    bodyWrapper,
    description,
    message,
  } = styles

  const {
    main: { temp, feels_like, temp_min, temp_max },
    weather,
  } = weatherData
  const weatherCondition = weather[0].main
  return (
    <SafeAreaView
    
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor },
      ]}
    >     
    
    
      <View style={container}>
      
        <Feather
          name={weatherType[weatherCondition].icon}
          size={100}
          color="#363753"
        />
        <Text style={tempStyles}>{`${temp}°`}</Text>
        <Text style={feels}>{`Feels like ${feels_like}`}</Text>

        <RowText
          messageOne={`High: ${temp_max}° `}
          messageTwo={`Low: ${temp_min}° `}
          containerStyles={hiLowWrapper}
          messageOneStyles={hiLow}
          messageTwoStyles={hiLow}
        />

        <RowText
          messageOne={weather[0]?.description}
          messageTwo={weatherType[weatherCondition]?.message}
          containerStyles={bodyWrapper}
          messageOneStyles={description}
          messageTwoStyles={message}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fefefe',
    justifyContent: 'center',
  },
  tempStyles: {
    fontSize: 48,
    color: '#363753',
  },
  feels: {
    fontSize: 30,
    color: '#363753',
  },
  hiLow: {
    fontSize: 20,
    color: '#363753',
  },
  hiLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 43,
    alignSelf: 'center',
    color: '#363753',
  },
  message: {
    fontSize: 25,
    alignSelf: 'center',
    color: '#363753',
  },
})

export default CurrentWeather
