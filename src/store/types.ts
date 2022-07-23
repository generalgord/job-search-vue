import { Degree, Job, Spotlight } from "@/api/types";

export interface GlobalState {
  isLoggedIn: boolean;
  jobs: Job[];
  spotlights: Spotlight[];
  degrees: Degree[];
  selectedOrganizations: string[];
  selectedJobTypes: string[];
}
