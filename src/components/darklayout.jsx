import React from "react"

import { StaticQuery, Link, graphql } from "gatsby"

/* import "/home/cabox/workspace/gatsby-starter-weather/src/styles/global.css" */

//import "./src/styles/global.css" 

import "../styles/global.css" 

export default ({ children }) => (
    <StaticQuery
    query={graphql`
      query {
  weatherData{
    latitude
    longitude
    timezone
    currently {
      time
      summary
      icon
      nearestStormDistance
      precipIntensity
      precipProbability
      temperature
      apparentTemperature
      dewPoint
      humidity
      pressure
      windSpeed
      windGust
      windBearing
      cloudCover
      uvIndex
      visibility
      ozone
    }
  }
  
}  `
}
    render={data => (
  <div  style={{ color: `FloralWhite` }}>
    <Link to="/" style={{ float: `right`}}>
      Home
    </Link>
    {children}
{/*    <Link to="/">Home </Link> */}
    <h3><ul>
      <li><h3>Time: {data.weatherData.currently.time}</h3></li>
      <ul>
       <li><h3>latitude: {data.weatherData.latitude}</h3></li>
        <li><h3>longitude: {data.weatherData.longitude}</h3></li>
      </ul>
      <li><h3>Currently Temperature: {data.weatherData.currently.temperature}</h3></li>
      <li><h3>Currently Summary: {data.weatherData.currently.summary}</h3></li>
      <li><h3>Nearest Storm Distance: {data.weatherData.currently.nearestStormDistance}</h3></li>
      <li><h3>Precipitation Probability:{data.weatherData.currently.precipProbability}</h3></li> 
      <li><h3>Precipitation Intensity:{data.weatherData.currently.precipIntensity}</h3></li> 
      <li><h3>Wind Speed: {data.weatherData.currently.windSpeed}</h3></li>
      <li><h3>Visibility: {data.weatherData.currently.windSpeed}</h3></li>
    </ul></h3>  
  </div>
    )}
  />
    )