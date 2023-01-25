import { insertImages, mocks } from "../utils/restaurants-mock/index.js";

export const index = (req, res) => {
  const { location } = req.params;
  let result = mocks[location];
  if (result) {
    result = insertImages(result.results);
    res.status(200).json(result);
  } else {
    res.status(404).json("No restaurant found");
  }
};
