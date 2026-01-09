import { useState } from "react";
import { toast } from "react-toastify";

const services = [
  { id: 1, name: "Classic Haircut", price: 22.5 },
  { id: 2, name: "Skin Fade", price: 27.5 },
];

export default function BookingForm({ user, bookings, setBookings }) {
  const [serviceId, setServiceId] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!serviceId || !date || !time) {
      toast.error("Vul alle velden in");
      return;
    }

    const bookingDate = new Date(`${date}T${time}`);
    if (bookingDate <= new Date()) {
      toast.error("Kies een datum in de toekomst");
      return;
    }

    const service = services.find(s => s.id == serviceId);

    const newBooking = {
      id: Date.now(),
      service: service.name,
      price: service.price,
      date: bookingDate.toISOString(),
      reminded: false
    };

    setBookings([...bookings, newBooking]);
    toast.success("Afspraak geboekt");
  };

  if (!user) return <p>Maak eerst een profiel aan</p>;

  return (
    <section className="card">
      <h2>Afspraak boeken</h2>
      <p>{user.name} ({user.email})</p>

      <form onSubmit={handleSubmit}>
        <select onChange={(e) => setServiceId(e.target.value)}>
          <option value="">Selecteer service</option>
          {services.map(s => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>

        <input type="date" min={new Date().toISOString().split("T")[0]} onChange={e => setDate(e.target.value)} />
        <input type="time" onChange={e => setTime(e.target.value)} />

        <button>Boek</button>
      </form>
    </section>
  );
}
