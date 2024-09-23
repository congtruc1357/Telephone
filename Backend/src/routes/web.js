import express from "express";

let router = express.Router();

let initEbRouter = (app) => {
  return app.use("/", router);
};

module.exports = initEbRouter;
