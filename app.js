const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

const header = require("./routes/headerRoute");
const about = require("./routes/aboutRoute");
const service = require("./routes/serviceRoute");
const blog = require("./routes/blogRoute");

app.use("/api", header);
app.use("/api", about);
app.use("/api", service);
app.use("/api", blog);

app.use(errorMiddleware);

module.exports = app;
