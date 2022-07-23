import axios from "axios";
jest.mock("axios");

import getSpotlights from "@/api/getSpotlights";

const axiosGetMock = axios.get as jest.Mock;

describe("getSpotlights", () => {
  beforeEach(() => {
    axiosGetMock.mockResolvedValue({
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
