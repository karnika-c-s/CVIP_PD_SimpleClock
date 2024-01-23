function updateTime() {
            const now = new Date();
            let hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            let session = "";  // Declare the session variable
    
            if (hours > 12){
              session = "PM";
              hours = hours - 12;
            } else {
              session = "AM";
            }
            
            const timeString = `${hours} : ${minutes} : ${seconds} ${session}`;
            document.getElementById('time').textContent = timeString;

          }
          
          function startClock() {
            updateTime();
            setInterval(updateTime, 1000);
          }
          
          document.addEventListener('DOMContentLoaded', startClock);