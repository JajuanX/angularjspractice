if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios')
const unirest = require("unirest");


app.get('/', (request,response) => {
  axios.get("https://api.chucknorris.io/jokes/random")
  .then(data => response.json(data.data))
  .catch(err => console.log(err))
})

app.listen(8080)
