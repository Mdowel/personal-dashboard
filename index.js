try {
    const res = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    const data = await res.json()
    document.body.style.backgroundImage = `url(${data.urls.regular})`
    document.getElementById("author").textContent = `By: ${data.user.name}`
} catch (err) {
    // Use a default background image/author
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
    )`
    document.getElementById("author").textContent = `By: Dodi Achmad`
}

try {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/bitcoin?tickers=true")
    if (!res.ok) {
        throw Error("Something went wrong")
    }
    const data = await res.json()

    document.getElementById("crypto-top").innerHTML = `
    <img src=${data.image.small} />
    <span>${data.symbol}</span>
    `

    document.getElementById("crypto").innerHTML = `
        <p>current price: $${data.market_data.current_price.usd}</p>
        <p>24hr change: $${Number(data.market_data.price_change_24h_in_currency.usd).toFixed(2)}</p>
    `
} catch (err) {
    console.error(err)
}

function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
}

setInterval(getCurrentTime, 1000)

navigator.geolocation.getCurrentPosition(async position => {
    try {
        const res = await fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
            if (!res.ok) {
                throw Error("Weather data not available")
            }
        const data = await res.json()
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        document.getElementById("weather").innerHTML = `
            <img src=${iconUrl} />
            <p class="weather-temp">${Math.round(data.main.temp)}º</p>
            <p class="weather-city">${data.name}</p>
        `
    } catch (err) {
        console.error(err)
    }
});


try {
	const response = await fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
	const data = await response.json();
    document.getElementById('joke-question').textContent = data.setup
    document.getElementById('joke-answer').textContent = data.delivery
} catch (error) {
	console.error(error);
}

