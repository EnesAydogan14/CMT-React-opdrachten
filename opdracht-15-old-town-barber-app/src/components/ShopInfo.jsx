const services = [
  { id: 1, name: "Classic Haircut", price: 22.5, duration: 30 },
  { id: 2, name: "Skin Fade", price: 27.5, duration: 40 },
  { id: 3, name: "Beard Trim", price: 15, duration: 20 },
];

export default function ShopInfo() {
  return (
    <section className="card">
      <h2>Old Town Barber</h2>
      <p>Ma–Vr: 09:00 – 18:30</p>
      <p>Za: 10:00 – 17:00</p>

      <h3>Services</h3>
      <ul>
        {services.map((s) => (
          <li key={s.id}>
            {s.name} – €{s.price} ({s.duration} min)
          </li>
        ))}
      </ul>
    </section>
  );
}
