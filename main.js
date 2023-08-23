const timeZone = () => {
  const time = document.getElementById("time");
  const date = document.getElementById("date");

  const now = new Date();
  const options = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
  const timeString = now.toLocaleTimeString([], options);

  const dateOptions = { day: "2-digit", month: "2-digit", year: "numeric" };
  const dateString = now.toLocaleDateString([], dateOptions);

  time.textContent = timeString;
  date.textContent = dateString;

  const hour = now.getHours();
  const body = document.body;

  if (hour >= 7 && hour < 10) {
    body.style.backgroundImage = "url('./img/bg-3.jpg')";
  } else if (hour >= 10 && hour < 18) {
    body.style.backgroundImage = "url('./img/bg-4.jpg')";
  } else if (hour >= 18 && hour < 21) {
    body.style.backgroundImage = "url('./img/bg-1.jpeg')";
  } else {
    body.style.backgroundImage = "url('./img/bg-2.jpeg')";
    time.style.color = "white";
    date.style.color = "white";
  }
};

timeZone();
setInterval(timeZone, 1000);
