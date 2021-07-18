export function replaceSpacesWithCamelCase(str: string): string {
  return str.replace(/\s+/g, (s) => {
    return s.substring(0, 1).toUpperCase() + s.substring(1);
  });
}

export function removeSpaces(str: string): string {
  return str.replace(/\s+/g, "");
}

export function convertToKebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

export function composeFunctions(...functions: Function[]): Function {
  return (args: unknown) => {
    return functions.reduce((acc, fn) => fn(acc), args);
  };
}

export function getTheLastSegmentFromKebabCase(
  str: string,
): string | undefined {
  return str.split("-").pop();
}

export function getSlug(name: string, index: number): string {
  const kebabName = composeFunctions(
    replaceSpacesWithCamelCase,
    removeSpaces,
    convertToKebabCase,
  )(name);
  return `${kebabName}-${index}`;
}

export function getInitial(name: string) {
  return name.charAt(0).toUpperCase();
}

export function isNotEmpty(value?: string): boolean {
  return value !== undefined && value !== "";
}
