'use strict'

const fs = require('fs');

const express = require('express');
const app = express();

const data = {};

data.mapData = JSON.parse(fs.readFileSync('./json/map_data.json'));
data.droneData = JSON.parse(fs.readFileSync('./json/drone_data.json'));

app.get('/', function(req, res) {
  console.log('request received');
  res.send(data);
});

app.listen(3000, function () {
    console.log('server running on port: 3000');
});
