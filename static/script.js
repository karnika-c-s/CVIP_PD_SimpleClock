function updateTime() {
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const session = hours >= 12 ? "PM" : "AM";
  
  //month names
  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"];
  const month = monthNames[now.getMonth()];

  //days 
  const dayNames = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
  const day = dayNames[now.getDay()];

  const dateString = `${day}, ${now.getDate()} ${month}   ${now.getFullYear()}`;
  const timeString = `${hours % 12 || 12} : ${minutes} : ${seconds} ${session}`;

  document.getElementById('time').innerHTML = `<div>${timeString}</div><div class="date">${dateString}</div>`;
}

function startClock() {
  updateTime();
  setInterval(updateTime, 1000);
}

document.addEventListener('DOMContentLoaded', startClock);
