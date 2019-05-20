import React from "react"

import { StaticQuery, Link, graphql } from "gatsby"

/* import "/home/cabox/workspace/gatsby-starter-weather/src/styles/global.css" */

// import "./src/styles/global.css" 

import "../styles/global.css" 

export default ({ children }) => (
    <StaticQuery
    query={graphql`
      query {
    openWeather{
      coord {
        lon
        lat
      } 
      sys {
        message
        country
        sunrise
        sunset
      }
      main {
        temp
        pressure
        humidity
        temp_min
        temp_max
      }
      dt
      wind {
        speed
        deg
      }
      clouds {
         all
      }
      name
    }
  }`
}
    render={data => (
  <div  style={{ color: `FloralWhite` }}>
        <Link to="/" style={{ float: `right`}}>
      Home
    </Link>
    {children}
        {/* <Link to="/">Home    </Link>  */}
     <h3><ul>
       <li><h3>City Name: {data.openWeather.name}</h3></li>
       <ul>
         <li><h3>City dt: {data.openWeather.dt}</h3></li>
         <li><h3>City Coord lat: {data.openWeather.coord.lat}</h3></li>
         <li><h3>City Coord lon: {data.openWeather.coord.lon}</h3></li>
       </ul>
       <li><h3>Temperature: {data.openWeather.main.temp}</h3></li>
       <ul>
          <li><h3>Temperature Minimum: {data.openWeather.main.temp_min}</h3></li>
         <li><h3>Temperature Maximum: {data.openWeather.main.temp_max}</h3></li>
       </ul>
       <li><h3>Wind Speed: {data.openWeather.wind.speed}</h3></li>
       <li><h3>Clouds: {data.openWeather.clouds.all}</h3></li>
       <li><h3>Sunrise: {data.openWeather.sys.sunrise}</h3></li>
       <li><h3>Sunset: {data.openWeather.sys.sunset}</h3></li>
  
     </ul></h3> 
	
  </div>
    )}
  />
    )