import { getCurrentLongDate, getCurrentMonthAndYear } from "../date-utils";

describe("getCurrentLongDate", () => {
  let dateSpy: jest.SpyInstance;

  beforeAll(() => {
    dateSpy = jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => new Date("2021-06-14 00:00:00").getTime());
  });

  afterAll(() => {
    dateSpy.mockRestore();
  });

  it("should return correct long date", () => {
    // Node.js can not return "toLocaleString" correctly using locale id
    // It will return using default locale en-US
    // TODO: change this after got a workaround to make this works
    expect(getCurrentLongDate()).toBe("June 14, 2021");
    expect(dateSpy).toBeCalledTimes(1);
  });
});

describe("getCurrentMonthAndYear", () => {
  let dateSpy: jest.SpyInstance;

  beforeAll(() => {
    dateSpy = jest
      .spyOn(global.Date, "now")
      .mockImplementation(() => Date.parse("2021-06-14"));
  });

  afterAll(() => {
    dateSpy.mockRestore();
  });

  it("should return correct month and year", () => {
    // Node.js can not return "toLocaleString" correctly using locale id
    // It will return using default locale en-US
    // TODO: change this after got a workaround to make this works
    expect(getCurrentMonthAndYear()).toBe("June 2021");
    expect(dateSpy).toBeCalledTimes(1);
  });
});
