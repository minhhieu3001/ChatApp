const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

const databaseConnect = require("./config/database");
const authRouter = require("./routes/authRoute");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

dotenv.config({
  path: "backend/config/config.env",
});

const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/", authRouter);

databaseConnect();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
