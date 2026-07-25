let form = document.getElementById("weatherForm");
let output = document.getElementById("output");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let city = document.getElementById("city").value;

    fetch(`https://p2pclouds.up.railway.app/v1/learn/weather?city=${city}`)
        .then(response => response.json())
        .then(data => {

            output.innerHTML = `
                <h2>Weather Report</h2>
                <p><strong>City:</strong> ${city}</p>
                <p><strong>Temperature:</strong> ${data.current.temp_c} °C</p>
                <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${data.current.wind_kph} km/h</p>
                <p><strong>Condition:</strong> ${data.current.condition.text}</p>
            `;

        })
        .catch(error => {

            output.innerHTML = `
                <p style="color:red;">
                    City not found!
                </p>
            `;

            console.log(error);
        });

});