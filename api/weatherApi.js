const express = require('express');
const app = express();
require('dotenv').config();



//WEATHER API


    const weatherApi = process.env.WEATHER_API;
    const request = require('request');
    request(weatherApi, (err, res, body) => {
      if(err){
        console.log("error: ", err);
      } else {
    
        const data = JSON.parse(res.body);
        const temp = data.main.temp;
        const icon = data.weather.icon;
        
    
      }
    });
    