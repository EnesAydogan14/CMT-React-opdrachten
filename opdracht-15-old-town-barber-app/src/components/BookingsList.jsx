export default function BookingsList({ bookings }) {
  const sorted = [...bookings].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <section className="card">
      <h2>Mijn afspraken</h2>

      {sorted.map(b => (
        <div key={b.id}>
          <strong>{b.service}</strong><br />
          {new Date(b.date).toLocaleString()} – €{b.price}
        </div>
      ))}
    </section>
  );
}
