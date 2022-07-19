import {
  FETCH_JOBS,
  FETCH_SPOTLIGHTS,
  RECEIVE_JOBS,
  RECEIVE_SPOTLIGHTS,
} from "@/store/constants";

import getJobs from "@/api/getJobs";
import getSpotlights from "@/api/getSpotlights";
import { Commit } from "vuex";

interface Context {
  commit: Commit;
}

export const actions = {
  [FETCH_JOBS]: async (context: Context) => {
    const jobListings = await getJobs();
    context.commit(RECEIVE_JOBS, jobListings);
  },
  [FETCH_SPOTLIGHTS]: async (context: Context) => {
    const spotlightListings = await getSpotlights();
    context.commit(RECEIVE_SPOTLIGHTS, spotlightListings);
  },
};

export default actions;
