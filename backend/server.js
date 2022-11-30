import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import * as config from "./config/config";

import authRouter from "./routes/authRoute";

const PORT = config.PORT;

const app = express();
// app.use(cors());
// app.use(express.json({ extended: true }));
// app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(config.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((e) => console.log(e));

app.use("/register", authRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
