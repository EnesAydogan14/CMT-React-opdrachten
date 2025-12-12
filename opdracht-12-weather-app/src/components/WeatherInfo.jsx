function WeatherInfo({ weather }) {
  if (!weather) return null;

  const city = weather.name;
  const temp = Math.round(weather.main.temp);
  const feels = Math.round(weather.main.feels_like);
  const humidity = weather.main.humidity;
  const wind = Math.round(weather.wind.speed);
  const iconCode = weather.weather?.[0]?.icon;
  const description = weather.weather?.[0]?.description;

  const iconUrl = iconCode
    ? `https://openweathermap.org/img/wn/${iconCode}@2x.png`
    : null;

  return (
    <div className="mt-6 w-full max-w-xl rounded-2xl bg-white/10 p-6 text-white shadow-lg backdrop-blur">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold">{city}</h2>
          <p className="text-sm opacity-80 capitalize">{description}</p>
        </div>

        {iconUrl && (
          <img
            src={iconUrl}
            alt="Weather icon"
            className="h-16 w-16"
          />
        )}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-white/10 p-4">
          <p className="text-sm opacity-80">Temperatuur</p>
          <p className="text-2xl font-bold">{temp}°C</p>
        </div>

        <div className="rounded-xl bg-white/10 p-4">
          <p className="text-sm opacity-80">Gevoelstemperatuur</p>
          <p className="text-2xl font-bold">{feels}°C</p>
        </div>

        <div className="rounded-xl bg-white/10 p-4">
          <p className="text-sm opacity-80">Luchtvochtigheid</p>
          <p className="text-2xl font-bold">{humidity}%</p>
        </div>

        <div className="rounded-xl bg-white/10 p-4">
          <p className="text-sm opacity-80">Wind snelheid</p>
          <p className="text-2xl font-bold">{wind} m/s</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
