const app = require("./app");
const dotenv = require("dotenv");
const DB = require("./config/db");


dotenv.config({ path: "./config/config.env" });
DB();


 app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

