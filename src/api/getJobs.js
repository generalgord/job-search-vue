import axios from "axios";

const getJobs = async () => {
  const baseUrl = process.env.VUE_APP_API_URL;
  const res = await axios.get(`${baseUrl}/jobs`);
  return res.data;
};

export default getJobs;
