import axios from "axios";
import { Degree } from "@/api/types";

const getDegrees = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const res = await axios.get<Degree[]>(`${baseUrl}/degrees`);
  return res.data;
};

export default getDegrees;
