import express from 'express'
import bodyParser from 'body-parser';
import configViewEngine from './config/viewEngine'
import connectDB from "./config/connectDB";

require("dotenv").config()

const app = express();

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", process.env.URL_REACT);

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

// Cấu hình view engine EJS
configViewEngine(app)

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const productRoutes = require("./routes/productRoutes");
app.use("/", productRoutes);

connectDB();

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
