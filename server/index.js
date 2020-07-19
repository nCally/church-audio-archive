
const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');
const { get_archive, add_archive } = require("./controllers");

require('dotenv').config();
mongoose.set('useCreateIndex', true);

const server = express();

server.use(body_parser.urlencoded({ extended: false }));
server.use(body_parser.json());

const origin = { origin: '*', }
server.use(cors(origin));

server.get("/archive", get_archive);
server.post("/add-to-archive", add_archive);

const PORT = process.env.PORT || "8010";

server.listen(PORT, (e) => {

  if (e) { console.log(e) }

  mongoose.connect(
    process.env.MONGO,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    },
    function (err) {
      if (err) { console.log(err) }
      else {
        console.log(`app running on ${PORT}`);
      }
    })


})