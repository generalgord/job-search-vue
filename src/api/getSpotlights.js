import axios from "axios";

const getSpotlights = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const res = await axios.get(`${baseUrl}/spotlights`);
  return res.data;
};

export default getSpotlights;
