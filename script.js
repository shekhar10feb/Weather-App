    // const API_KEY = `9269b18c517996fafc4e88b06f94ae15`;

    const key = config.SECRET_API_KEY;

    const form = document.querySelector("form");

    const search = document.querySelector(".search");

    const weather = document.querySelector("#weather");

    const getWeather = async(city) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        return showWeather(data);
    }

    const showWeather = (data) => {
        console.log(data);
        weather.innerHTML = `
              <div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
              </div>
              <div>
                <h2>${data.main.temp} °C</h2>
                <h4>${data.weather[0].main}</h4>
              </div>
            `;
    }

    form.addEventListener('submit', function(event) {
        getWeather(search.value);
        event.preventDefault();
    })