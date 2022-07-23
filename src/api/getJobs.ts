import axios from "axios";
import { Job } from "@/api/types";

const getJobs = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const res = await axios.get<Job[]>(`${baseUrl}/jobs`);
  return res.data;
};

export default getJobs;
