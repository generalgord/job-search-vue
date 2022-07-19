import { Job, Spotlight } from "@/api/types";

export interface GlobalState {
  isLoggedIn: boolean;
  jobs: Job[];
  spotlights: Spotlight[];
  selectedOrganizations: string[];
  selectedJobTypes: string[];
}
