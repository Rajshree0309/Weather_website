function getWeather() {
    const city = document.getElementById('cityInput').value;
    
    const apiKey = 'bd5e378503939ddaee76f12ad7a97608';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        displayWeather(data);
      })
      .catch(error => {
        console.log('Error fetching weather data:', error);
      });
  }
  
  function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
  
    if (data.cod === '404') {
      weatherInfo.textContent = 'City not found';
    } else {
      const cityName = data.name;
      const temperature = data.main.temp;
      const weatherDescription = data.weather[0].description;
  
      weatherInfo.innerHTML = `<p>City: ${cityName}</p>
                               <p>Temperature: ${temperature}°C</p>
                               <p>Description: ${weatherDescription}</p>`;
    }
  }
  