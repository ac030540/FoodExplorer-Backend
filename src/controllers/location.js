import Debug from "debug";
import { locations } from "../utils/location.mock.js";

const debug = Debug("API:routes:location");

export const index = (req, res) => {
  debug("GET /restaurants/:city");
  const { city } = req.params;
  const location = locations[city.toLowerCase().trim()];
  if (location) {
    res.status(200).json(location);
  } else {
    res.status(404).json("Location not found");
  }
};
