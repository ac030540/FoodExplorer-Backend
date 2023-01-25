import express from "express";
import cors from "cors";
import Debug from "debug";
import initRoutes from "./routes/index.js";

const debug = Debug("API:app");
const app = express();

app.use(cors());

// REST API Routes
initRoutes(app);

const server = app.listen(process.env.PORT || "3000", () =>
  debug(`Server running on port ${process.env.PORT || 3000}`)
);

export default server;
