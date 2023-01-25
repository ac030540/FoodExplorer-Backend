import Debug from "debug";
import staticRoutes from "./static.js";
import locationRoutes from "./location.js";
import restaurantsRoutes from "./restaurants.js";

const debug = Debug("API:routes");

const initRoutes = (app) => {
  debug("Initializing routes...");

  app.use("/", staticRoutes);
  app.use("/location", locationRoutes);
  app.use("/restaurants", restaurantsRoutes);

  debug("Finished initializing routes...");
};

export default initRoutes;
