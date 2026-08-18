import { filterApplications } from "./applications";

import { Application } from "./types";

import createApplication from "@/test/createApplication";



const applications: Application[] = [
  createApplication({
    company: "Microsoft",
    status: "APPLIED",
    platform: "LinkedIn",
    appliedDate: new Date("2026-07-01"),
    followupDate: new Date("2026-07-10")
  }),

  createApplication({
    id: "2",
    company: "Google",
    status: "INTERVIEWED",
    platform: "Indeed",
    appliedDate: new Date("2026-07-05"),
    followupDate: new Date("2026-07-15")
  }),

  createApplication({
    id: "3",
    company: "Amazon",
    status: "OFFER",
    platform: "LinkedIn",
    appliedDate: new Date("2026-07-20"),
    followupDate: null
  }),

  createApplication({
    id: "4",
    company: "Microchip",
    status: "REJECTED",
    platform: "Wellfound",
    appliedDate: new Date("2026-08-01"),
    followupDate: new Date("2026-08-10")
  })
];

describe("filterApplications", () => {
  it("return all applications when no filters are active", () => {
    const filter = {
      company: "",
      status: "all",
      platform: "all",
      appliedDate: undefined,
      followupDate: undefined
    };

    const filterResults = filterApplications(applications, filter);

    expect(filterResults).toEqual(applications);
  });

  it("filters applications by company name", () => {
    const filter = {
      company: "micro",
      status: "all",
      platform: "all",
      followupDate: undefined,
      appliedDate: undefined
    };

    const filterByCompany = filterApplications(applications, filter);

    expect(filterByCompany).toHaveLength(2);
    expect(filterByCompany[0].company).toBe("Microsoft");
    expect(filterByCompany[1].company).toBe("Microchip");
  });

  it("filters applications by status", () => {
    const filter = {
      company: "",
      status: "INTERVIEWED",
      platform: "all",
      followupDate: undefined,
      appliedDate: undefined
    };

    const filterByStatus = filterApplications(applications, filter);

    expect(filterByStatus).toHaveLength(1);
    expect(filterByStatus[0].status).toBe("INTERVIEWED");
    expect(filterByStatus[0].company).toBe("Google");
    expect(filterByStatus[0].id).toBe("2");
  });

  it("filters applications by platform", () => {
    const filter = {
      company: "",
      status: "all",
      platform: "LinkedIn",
      followupDate: undefined,
      appliedDate: undefined
    };

    const filterByPlatform = filterApplications(applications, filter);

    expect(filterByPlatform).toHaveLength(2);

    expect(filterByPlatform[0].company).toBe("Microsoft");
    expect(filterByPlatform[1].company).toBe("Amazon");
    expect(filterByPlatform[0].platform).toBe("LinkedIn");
    expect(filterByPlatform[1].platform).toBe("LinkedIn");
    expect(filterByPlatform[0].id).toBe("1");
    expect(filterByPlatform[1].id).toBe("3");
  });

  it("filters applications by applied date range", () => {
    const filter = {
      company: "",
      status: "all",
      platform: "all",
      followupDate: undefined,
      appliedDate: {
        from: new Date("2026-07-01"),
        to: new Date("2026-07-05")
      }
    };

    const filterByAppliedDate = filterApplications(applications, filter);

    expect(filterByAppliedDate).toHaveLength(2);
    expect(filterByAppliedDate[0].company).toBe("Microsoft");
    expect(filterByAppliedDate[1].company).toBe("Google");
    expect(filterByAppliedDate[0].id).toBe("1");
    expect(filterByAppliedDate[1].id).toBe("2");
  });

  it("returns applications within the applied date boundary range", () => {
    const filter = {
      company: "",
      status: "all",
      platform: "all",
      appliedDate: {
        from: new Date("2026-07-20T01:10:50"),
        to: new Date("2026-08-01T05:02:10")
      },
      followupDate: undefined
    };

    const filterByAppliedDate = filterApplications(applications, filter);

    expect(filterByAppliedDate).toHaveLength(2);
    expect(filterByAppliedDate[0].id).toBe("3");
    expect(filterByAppliedDate[1].id).toBe("4");
    expect(filterByAppliedDate[0].company).toBe("Amazon");
    expect(filterByAppliedDate[1].company).toBe("Microchip");
  });

  it("returns application outside the applied date range", () => {
    const filter = {
      company: "",
      status: "all",
      platform: "all",
      followupDate: undefined,
      appliedDate: {
        from: new Date("2026-08-02"),
        to: new Date("2026-09-05")
      }
    };

    const filterByAppliedDate = filterApplications(applications, filter);
    expect(filterByAppliedDate).toHaveLength(0);
  });

  it("filters applications by follow-up date range", () => {
    const filter = {
      company: "",
      status: "all",
      platform: "all",
      appliedDate: undefined,
      followupDate: {
        from: new Date("2026-07-10"),
        to: new Date("2026-07-15")
      }
    };

    const filterByFollowupDate = filterApplications(applications, filter);

    expect(filterByFollowupDate).toHaveLength(2);
    expect(filterByFollowupDate[0].company).toBe("Microsoft");
    expect(filterByFollowupDate[1].company).toBe("Google");

    expect(filterByFollowupDate[0].id).toBe("1");
    expect(filterByFollowupDate[1].id).toBe("2");
  });

  it("returns applications within follow-up date boundary range", () => {
    const filter = {
      company: "",
      status: "all",
      platform: "all",
      appliedDate: undefined,
      followupDate: {
        from: new Date("2026-07-31T23:59:59"),
        to: new Date("2026-08-10T23:59:59")
      }
    };

    const filterByFollowupDate = filterApplications(applications, filter);
    expect(filterByFollowupDate).toHaveLength(1);
    expect(filterByFollowupDate[0].company).toBe("Microchip");
    expect(filterByFollowupDate[0].id).toBe("4");
  });

  it("returns applications outside follow-up date range", () => {
    const filter = {
      company: "",
      status: "all",
      platform: "all",
      appliedDate: undefined,
      followupDate: {
        from: new Date("2026-05-01"),
        to: new Date("2026-07-09")
      }
    };

    const filterByFollowupDate = filterApplications(applications, filter);
    expect(filterByFollowupDate).toHaveLength(0);
  });

  it("applies partial filters together", () => {
    const filter = {
      company: "micro",
      status: "APPLIED",
      platform: "LinkedIn",
      appliedDate: undefined,
      followupDate: undefined
    };

    const filterResults = filterApplications(applications, filter);
    expect(filterResults).toHaveLength(1);
    expect(filterResults[0].company).toBe("Microsoft");
    expect(filterResults[0].id).toBe("1");
  });

  it("applies all filters together", () => {
    const filter = {
      company: "o",
      status: "INTERVIEWED",
      platform: "Indeed",
      appliedDate: {
        from: new Date("2026-07-01"),
        to: new Date("2026-07-10")
      },
      followupDate: {
        from: new Date("2026-07-05"),
        to: new Date("2026-07-15")
      }
    };

    const filterResults = filterApplications(applications, filter);

    expect(filterResults).toHaveLength(1);
    expect(filterResults[0].company).toBe("Google");
    expect(filterResults[0].id).toBe("2");
  });
});

