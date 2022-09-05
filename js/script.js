document.getElementById('btn-search').addEventListener('click', function () {
    const inputField = document.getElementById('input-field').value;
    const cityName = inputField;
    const apiKey = '4fed8f34e45a7b918909ed9feadf1e18'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => getWeather(data));
    const getWeather = (data) => {
        const areaName = data.name;
        const temp = data.main.temp;
        const weather = data.weather[0].main;
        const description = data.weather[0].description;
        document.getElementById('city').innerText = areaName;
        document.getElementById('temp').innerText = temp;
        document.getElementById('weather').innerText = weather;
        document.getElementById('description').innerText = description;
    }
})




