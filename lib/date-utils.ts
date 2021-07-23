const LOCALE_ID = "id";
const NUMERIC = "numeric";
const LONG = "long";

const DEFAULT_YEAR_FORMAT = NUMERIC;
const DEFAULT_DAY_FORMAT = NUMERIC;
const LONG_MONTH_FORMAT = LONG;

/**
 * Get current month and year in a single string
 *
 * @returns {string} month and year, e.g: Juli 2021
 */
export function getCurrentMonthAndYear(): string {
  return new Date().toLocaleString(LOCALE_ID, {
    year: DEFAULT_YEAR_FORMAT,
    month: LONG_MONTH_FORMAT,
  });
}

/**
 * Get current date, month and year in a single string
 *
 * @returns {string} date, month and year, e.g: 23 Juli 2021
 */
export function getCurrentLongDate(): string {
  return new Date().toLocaleString(LOCALE_ID, {
    year: DEFAULT_YEAR_FORMAT,
    month: LONG_MONTH_FORMAT,
    day: DEFAULT_DAY_FORMAT,
  });
}
