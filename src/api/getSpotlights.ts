import axios from "axios";
import { Spotlight } from "@/api/types";

const getSpotlights = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const res = await axios.get<Spotlight[]>(`${baseUrl}/spotlights`);
  return res.data;
};

export default getSpotlights;
