module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Weather - DarkSky and OpenWeather`,
<<<<<<< HEAD
    description: 'Gatsby Weather Starter',
=======
>>>>>>> c7f009f3b14f5d61affa7f67175aec6c7c412336
    pathPrefix: '/static-gatsby-weather',
  },
  plugins: [
 {
      resolve: 'gatsby-source-openweathermap',
      options: {
        apikey: '98c01147cc7a6142fc65f163313d0123',
        location: 'Chicago',
        units: 'imperial',
        type: 'weather'
      },
    },
<<<<<<< HEAD

=======
  
>>>>>>> c7f009f3b14f5d61affa7f67175aec6c7c412336
    {
      resolve: 'gatsby-source-darksky',
      options: {
        key: 'ab9f3979063f82566494b7273d56437f',
        latitude: '43.03',
        longitude: '-87.74',
        exclude: ['minutely']
      },
<<<<<<< HEAD
    },
    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "My Weather Starter",
        short_name: "WeatherStarter",
        background_color: "#1E90FF",
        theme_color: "#1E90FF",
      },
    },
  
    'gatsby-plugin-offline',
    `gatsby-plugin-react-helmet`,
=======
    } 
>>>>>>> c7f009f3b14f5d61affa7f67175aec6c7c412336
    
  ]
}