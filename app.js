const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const errorMiddleware = require("./middleware/error");
const path = require("path");

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "./config/config.env" });
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

const header = require("./routes/headerRoute");
const about = require("./routes/aboutRoute");
const service = require("./routes/serviceRoute");
const blog = require("./routes/blogRoute");
const user = require("./routes/userRoute");


app.use("/api", header);
app.use("/api", about);
app.use("/api", service);
app.use("/api", blog);
app.use("/api", user);

app.use(express.static(path.join(__dirname, "./weeb_design/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./weeb_design/build/index.html"));
});

app.use(errorMiddleware);

module.exports = app;
