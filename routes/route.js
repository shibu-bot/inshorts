import express from  "express";

import fetchNews from "../controller/news-controller.js";

const route = express.Router();

route.get("/news", fetchNews);

export default route;