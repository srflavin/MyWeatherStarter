import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Header from "../components/header"
// import "/home/cabox/workspace/gatsby-hello-world/src/styles/global.css"


export default () => (
  <div style={{ color: `#defff0` }} >
    <Helmet>
      <meta charSet="utf-8" />
      <title>Weather Starter</title>
      <meta name="Description" content="Weather Starter" />
    </Helmet>
    <Header headerText="Welcome to Chicago's Weather page!" />
    <img src="https://source.unsplash.com/400x200/?chicago" alt="" />
    <p>Click on the link below to view the weather with eithe rhte DarkSky plugin or the openWeather plugin.</p>
    <ul>
    <li><Link to="/">Home</Link></li> 
    <li><Link to="/darkabout/">DarkSky Home</Link> </li>
    <li><Link to="/openabout/">OpenWeather Home</Link> </li>
      </ul>
    </div>
)