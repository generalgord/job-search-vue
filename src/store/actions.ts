import {
  FETCH_DEGREES,
  FETCH_JOBS,
  FETCH_SPOTLIGHTS,
  RECEIVE_DEGREES,
  RECEIVE_JOBS,
  RECEIVE_SPOTLIGHTS,
} from "@/store/constants";

import getJobs from "@/api/getJobs";
import getSpotlights from "@/api/getSpotlights";
import { Commit } from "vuex";
import getDegrees from "@/api/getDegrees";

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
  [FETCH_DEGREES]: async (context: Context) => {
    const degreeListings = await getDegrees();
    context.commit(RECEIVE_DEGREES, degreeListings);
  },
};

export default actions;
