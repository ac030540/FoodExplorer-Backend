import Debug from "debug";
import { insertImages, mocks } from "../utils/restaurants-mock/index.js";

const debug = Debug("API:routes:restaurants");

export const index = (req, res) => {
  debug("GET /restaurants/:location");
  const { location } = req.params;
  let result = mocks[location];
  if (result) {
    result = insertImages(result.results);
    res.status(200).json(result);
  } else {
    res.status(404).json("No restaurant found");
  }
};
