
const express = require("express");
const body_parser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const { get_archive, add_archive } = require("./controllers");

const server = express();

server.use(body_parser.urlencoded({ extended: false }));
server.use(body_parser.json());

const origin = { origin: '*', }
server.use(cors(origin));

server.get("/archive", get_archive);
server.post("/add-to-archive", add_archive);

const PORT = process.env.PORT || "8010";

db.sync()
    .then(() => {
        server.listen(PORT, () => {
            console.log(`app running on ${PORT}`);
        })
    })
    .catch(error => {
        throw error;
    })