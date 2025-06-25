const https = require('https');

const API_KEY = 'b6d9bff7b4dd62d708440d758e06cbbe';
const LAT = -6.21;
const LON = 106.85;
const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric`;

function formatDate(dateStr) {
  const date = new Date(dateStr);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const dayName = days[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${dayName}, ${day} ${month} ${year}`;
}

function get5DayForecast() {
  https.get(URL, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      try {
        const json = JSON.parse(data);
        const forecasts = json.list || [];
        if (!forecasts.length) {
          console.log('Tidak ada data cuaca yang diterima. Respons API:');
          console.log(JSON.stringify(json, null, 2));
          return;
        }
        const daily = {};
        for (const entry of forecasts) {
          const [date, time] = entry.dt_txt.split(' ');
          if (!daily[date] || time === '12:00:00') {
            daily[date] = {
              temp: entry.main.temp,
              time: time
            };
          }
        }
        const dates = Object.keys(daily).slice(0, 5);
        console.log('Weather Forecast:');
        for (const date of dates) {
          const info = daily[date];
          const formattedDate = formatDate(date);
          const roundedTemp = Math.round(info.temp);
          console.log(`${formattedDate}: ${roundedTemp}°C`);
        }
      } catch (err) {
        console.error('Error parsing weather data:', err.message);
        console.log('Raw response:', data);
      }
    });
  }).on('error', (err) => {
    console.error('Failed to fetch weather data:', err.message);
  });
}

get5DayForecast(); 