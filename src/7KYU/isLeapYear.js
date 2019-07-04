function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
    ? true
    : false;
}

export const LeapYear = console.log(
  isLeapYear(1988),
  true,
  "Year 1988 is a leap year",
  isLeapYear(1234),
  false,
  "Year 1234",
  isLeapYear(1984),
  true,
  "Year 1984",
  isLeapYear(2000),
  true,
  "Year 2000",
  isLeapYear(2010),
  false,
  "Year 2010",
  isLeapYear(2013),
  false,
  "Year 2013"
);
