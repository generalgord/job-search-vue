import axios from "axios";
jest.mock("axios");

import getSpotlights from "@/api/getSpotlights";

describe("getSpotlights", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          title: "Cloud Engineering",
        },
      ],
    });
  });

  it("fetches jobs that candidates can apply to", async () => {
    await getSpotlights();
    expect(axios.get).toHaveBeenCalledWith("http://myfakeip.com/spotlights");
  });

  it("extracts spotlights from response", async () => {
    const data = await getSpotlights();
    expect(data).toEqual([
      {
        id: 1,
        title: "Cloud Engineering",
      },
    ]);
  });
});
