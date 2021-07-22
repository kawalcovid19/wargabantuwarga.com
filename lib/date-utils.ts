export const monthsString: string =
  "Januari,Februari,Maret,April,Mei,Juni,Juli,Agustus,September,Oktober,November,Desember";
export const monthNames: string[] = monthsString.split(",");

export function getCurrentMonth(): string {
  const monthIndex = new Date().getMonth();
  return monthNames[monthIndex];
}

export function getCurrentYear(): number {
  return new Date().getFullYear();
}

export function getCurrentDate(): number {
  return new Date().getDate();
}
