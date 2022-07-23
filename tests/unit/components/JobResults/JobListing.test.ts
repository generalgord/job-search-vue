import { mount, RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/JobResults/JobListing.vue";

import { createJob } from "../../store/utils";
import { Job } from "@/api/types";

describe("JobListing", () => {
  const createConfig = (job: Job) => ({
    props: {
      job: {
        ...job,
      },
    },
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("renders job title", () => {
    const job = createJob({ title: "Vue Programmer" });

    const wrapper = mount(JobListing, createConfig(job));
    expect(wrapper.text()).toMatch("Vue Programmer");
  });
  it("renders job organization", () => {
    const job = createJob({ organization: "AirBnB" });

    const wrapper = mount(JobListing, createConfig(job));
    expect(wrapper.text()).toMatch("AirBnB");
  });
  it("renders job locations", () => {
    const job = createJob({ locations: ["İstanbul", "Ankara"] });

    const wrapper = mount(JobListing, createConfig(job));
    expect(wrapper.text()).toMatch("İstanbul");
    expect(wrapper.text()).toMatch("Ankara");
  });
  it("renders job qualifications", () => {
    const job = createJob({
      minimumQualifications: ["Code", "Develop"],
    });

    const wrapper = mount(JobListing, createConfig(job));
    expect(wrapper.text()).toMatch("Code");
    expect(wrapper.text()).toMatch("Develop");
  });
  it("links to invidual job's page", () => {
    const job = createJob({
      id: 15,
    });
    const wrapper = mount(JobListing, createConfig(job));
    const jobPageLink = wrapper.findComponent(RouterLinkStub);
    const toProp = jobPageLink.props("to");
    expect(toProp).toBe("/jobs/results/15");
  });
});
