import { Degree, Job, Spotlight } from "@/api/types";
import { GlobalState } from "@/store/types";

import state from "@/store/state";

export const createState = (config: Partial<GlobalState> = {}): GlobalState => {
  const initialState = state();

  return { ...initialState, ...config };
};

export const createJob = (config: Partial<Job> = {}): Job => ({
  id: 2,
  title: "Java Coder",
  organization: "VueTube",
  degree: "Bachelor's",
  jobType: "Part-time",
  locations: ["Buenos Aires", "Oslo"],
  minimumQualifications: [],
  preferredQualifications: [],
  description: [],
  dateAdded: "2021-06-19",
  ...config,
});

export const createSpotlight = (
  config: Partial<Spotlight> = {}
): Spotlight => ({
  id: 1,
  img: "https://images.unsplash.com/photo-1556075798-4825dfaaf498",
  title: "Cloud Engineering",
  description: "Build fun stuff in the cloud. It's a lot of fun, we promise!",
  ...config,
});

export const createDegree = (config: Partial<Degree> = {}): Degree => ({
  id: 1,
  degree: "Master's",
  ...config,
});
