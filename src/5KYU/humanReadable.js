function humanReadable(seconds) {
  // 1 hour has 60 minutes and one minute has 60 seconds:
  // 1 hour = (60 minutes/hour) × (60 seconds/minute)
  // = 3600 seconds/hour
  //359999 seconds on the clock
  //if >=359900

  if (seconds < 60) {
    return `00:00:${seconds < 10 ? "0" + seconds : seconds}`;
  } else if (seconds > 60 && seconds < 3600) {
    return `00:${seconds}`;
  }
}

export const human = console.log(
  humanReadable(0),
  "00:00:00",
  "humanReadable(0)",
  humanReadable(5),
  "00:00:05",
  "humanReadable(5)",
  humanReadable(60),
  "00:01:00",
  "humanReadable(60)",
  humanReadable(86399),
  "23:59:59",
  "humanReadable(86399)",
  humanReadable(359999),
  "99:59:59",
  "humanReadable(359999)"
);
