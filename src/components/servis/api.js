import axios from "axios";

export const fetchHits = async () => {
  const response = await axios.get(
    `https://api.unsplash.com/photos/?client_id=MH5nMDsKMx575nnwA8p1FeKChrTHHmhgENkd23kCa1s`
  );
  return response.data;
};
