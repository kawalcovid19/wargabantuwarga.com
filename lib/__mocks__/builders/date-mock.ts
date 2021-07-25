import {
  DEFAULT_YEAR_FORMAT,
  LOCALE_ID,
  LONG_MONTH_FORMAT,
} from "~/lib/date-utils";

import { build, fake } from "@jackfranklin/test-data-bot";

interface DateMock {
  date: Date;
  dateStr?: string;
}

export const dateMockBuilder = build<DateMock>({
  fields: {
    date: fake((f) => f.date.recent()),
  },
  postBuild: (dateMock) => {
    dateMock.dateStr = dateMock.date.toLocaleString(LOCALE_ID, {
      year: DEFAULT_YEAR_FORMAT,
      month: LONG_MONTH_FORMAT,
    });
    return dateMock;
  },
});
