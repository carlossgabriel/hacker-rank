const timeString = "12:05:45PM";
function timeConversion(time) {
  let hours = parseInt(time.slice(0, 2));
  const ampm = time.slice(-2);

  if (ampm === "PM" && hours !== 12) {
    hours = (hours % 12) + 12;
  } else if (ampm === "AM" && hours === 12) {
    hours = 0;
  }

  return String(hours).padStart(2, "0") + time.slice(2).slice(0, -2);
}
console.log(timeConversion(timeString));
