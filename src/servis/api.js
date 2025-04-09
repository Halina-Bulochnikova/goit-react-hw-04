import axios from "axios";

const fetchResults = async() => {
    const response = await axios.get("https://api.unsplash.com/photos/?client_id=MH5nMDsKMx575nnwA8p1FeKChrTHHmhgENkd23kCa1s");
    return response.data;
}
export default fetchResults;

