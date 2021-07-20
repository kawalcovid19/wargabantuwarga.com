/**
 * Converts a string to snake_case.
 *
 * @param {string} str input string
 * @returns {string} snake_cased version of `str`
 */
export function toSnakeCase(str: string): string {
  return str.trim().toLowerCase().replace(" ", "_");
}

/**
 * Converts a string to TitleCase
 *
 * @param {string} str input string
 * @returns {string} TitleCased version of `str`
 */
export function toTitleCase(str: string): string {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Convert all whitespaces in a string to camelCase
 *
 * @param {string} str input string
 * @returns {string} camelCased and whitespace-free version of `str`
 */
export function replaceSpacesWithCamelCase(str: string): string {
  return str.replace(/\s+/g, (s) => {
    return s.substring(0, 1).toUpperCase() + s.substring(1);
  });
}

/**
 * Replace all non-alphanumeric character in a string with space
 *
 * @param {string} str input string
 * @returns {string} `str`, without non-alphanumeric characters
 */
export function replaceSpecialCharacterWithSpace(str: string): string {
  return str.replace(/[^a-zA-Z0-9. ]/g, " ");
}

/**
 * Remove all whitespaces from a string
 *
 * @param {string} str input string
 * @returns {string} whitespace-free version of `str`
 */
export function removeSpaces(str: string): string {
  return str.replace(/\s+/g, "");
}

/**
 * Converts a string to kebab-case
 *
 * @param {string} str input string
 * @returns {string} kebab-cased version of `str`
 */
export function convertToKebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

/**
 * Get slug from slug identifier and slug index
 *
 * @param {string} name slug identifier
 * @param {number} index slug index
 * @returns {string} slug string
 */
export function getSlug(name: string, index: number): string {
  const kebabName = convertToKebabCase(
    removeSpaces(
      replaceSpecialCharacterWithSpace(replaceSpacesWithCamelCase(name)),
    ),
  );
  return `${kebabName}-${index}`;
}

/**
 * Checks if all strings in an array are empty strings
 *
 * @param {string[]} array input array
 * @returns `true` if all strings in `array` are empty strings,
 * `false` otherwise
 */
export function allIsEmptyString(array: string[]) {
  return array.every((str) => !str.length);
}

/**
 * Get current time in seconds, formatted to 3 numbers behind commas precision
 *
 * @param {[number, number]} hrtime High resolution time, should be
 * `process.hrtime()`
 * @returns {string} time string, in seconds.
 */
export function toSecond(hrtime: [number, number]): string {
  return (hrtime[0] + hrtime[1] / 1e9).toFixed(3);
}

/**
 * Build a function pipeline
 *
 * @param {Function[]} functions array of functions, ordered by the expected
 * order of execution
 * @returns {Function} chained functions
 */
export function composeFunctions(...functions: Function[]): Function {
  return (args: unknown) => {
    return functions.reduce((acc, fn) => fn(acc), args);
  };
}

/**
 * Get the last segment from a kebab-cased string
 *
 * @param {string} str input string
 * @returns {string} the last segment of `str`
 */
export function getTheLastSegmentFromKebabCase(
  str: string,
): string | undefined {
  return str.split("-").pop();
}

/**
 * Get initial of a string
 *
 * @param {string} name input string
 * @returns {string} initial of `name` in uppercase
 */
export function getInitial(name: string) {
  return name.charAt(0).toUpperCase();
}

/**
 * Checks if a string is empty
 *
 * @param {string} value string to be tested
 * @returns {string} `true` if `value` is empty. `false` otherwise
 */
export function isNotEmpty(value?: string): boolean {
  return !!value;
}
