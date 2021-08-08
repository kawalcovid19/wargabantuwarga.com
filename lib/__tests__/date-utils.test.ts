import { dateMockBuilder } from "../__mocks__/builders/date-mock";
import { getCurrentLongDate, getCurrentMonthAndYear } from "../date-utils";

describe("date-utils", () => {
  const { date, dateStr, monthStr } = dateMockBuilder();

  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(date);
  });

  afterAll(() => {
    jest.useRealTimers();
  });
  describe("getCurrentLongDate", () => {
    it("should return correct long date in 'id' locale", () => {
      expect(getCurrentLongDate()).toEqual(dateStr);
    });
  });
  describe("getCurrentMonthAndYear", () => {
    it("should return correct month and year in 'id' locale", () => {
      expect(getCurrentMonthAndYear()).toEqual(monthStr);
    });
  });
});
