import { locations } from "../utils/location.mock.js";

export const index = (req, res) => {
  const { city } = req.params;
  const location = locations[city.toLowerCase().trim()];
  if (location) {
    res.status(200).json(location);
  } else {
    res.status(404).json("Location not found");
  }
};
