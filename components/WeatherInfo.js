import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'

export default function WeatherInfo({currentWeather}) {
    const {main : {temp}, weather: [details], name, } = currentWeather;
    const {icon, main, description} = details;
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

    return (
        <View style={styles.WeatherInfo}>
            <Text>{ name } </Text>
            <Image style={styles.weatherIcon} source={{uri: iconUrl}} />
            <Text>{temp}°c </Text>
            {/* <Text> { description } </Text> */}
            <Text> { main } </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    WeatherInfo: {
        alignItems: 'center'
    },
    weatherIcon: {
        width: 100,
        height: 100
    }
})


// Going to add more customization to this part, better colors and icons, and to try and get some
// of my own icons and designs into the weather details. 