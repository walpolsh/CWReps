function humanReadable(seconds) {
  let sec_num = parseInt(seconds, 10);
  let hours = Math.floor(sec_num / 3600);
  let minutes = Math.floor((sec_num - hours * 3600) / 60);
  let secs = sec_num - hours * 3600 - minutes * 60;
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (secs < 10) secs = "0" + secs;
  return hours + ":" + minutes + ":" + secs;
}
console.log(
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
