const request = require('postman-request');
const { json } = require('express')
const express = require('express')
const app = express()


  app.get('/ciudad/:id', function (req, res) {
    request('http://api.weatherstack.com/current?access_key=94f186c134076d040fe1452d86871ec2&query=' + req.params.id, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        let algo = JSON.parse(body)
        console.log('body:', algo.request.type); // Print the HTML for the Google homepage.
        console.log('body:', algo.request.query);
        console.log('body:', algo.current.temperature);

        res.send(`<p>En ${algo.request.query} hay una temperatura de ${algo.current.temperature} grados</p>`)
      });

  })
app.listen(3000)


