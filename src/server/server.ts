import express from "express";
import config, { PORT } from "./config";
import os from "node:os";

const server = express();

server.use(express.static("dist"));

server.set("view engine", "ejs");

server.use("/", (req, res) => {
  res.render("index", {
    InitialContent: "Loading...",
  });
});

server.listen(config.PORT,config.HOST, () => {
  console.info(
    `Express Server is listening at ${config.SERVER_URL}`,
    `Free Mem: ${os.freemem() / 1024 / 1024}`
  );
});

