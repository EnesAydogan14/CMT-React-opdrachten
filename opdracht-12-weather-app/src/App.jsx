import { useState } from "react";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;



  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const trimmed = city.trim();
    if (!trimmed) {
      setError("Vul een stad in.");
      return;
    }

    try {
      setLoading(true);
      setWeather(null);

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        trimmed
      )}&appid=${apiKey}&units=metric`;

      const res = await fetch(url);

      if (!res.ok) {
        
        const data = await res.json().catch(() => null);
        throw new Error(data?.message || "Stad niet gevonden.");
      }

      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message || "Er ging iets mis.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-sky-900 px-4 py-10">
      <div className="mx-auto flex max-w-2xl flex-col items-center">
        <h1 className="text-3xl font-bold text-white">Weer App</h1>
        <p className="mt-2 text-white/80">Zoek een stad en bekijk het huidige weer.</p>

        <form onSubmit={handleSubmit} className="mt-8 flex w-full gap-3">
          <input
            className="w-full rounded-xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none focus:border-white/30"
            placeholder="Bijv. Rotterdam"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button
            type="submit"
            className="rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 hover:opacity-90 disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "..." : "Zoek"}
          </button>
        </form>

        {error && (
          <p className="mt-4 w-full max-w-xl rounded-xl bg-red-500/20 p-3 text-sm text-red-100">
            {error}
          </p>
        )}
        <WeatherInfo weather={weather} />
      </div>
    </div>
  );
}

export default App;
