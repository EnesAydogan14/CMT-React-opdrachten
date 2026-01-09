import { useState } from "react";
import { toast } from "react-toastify";

export default function UserProfile({ user, setUser }) {
  const [form, setForm] = useState(
    user || { name: "", email: "", phone: "" }
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name || !form.email || !form.phone) {
      toast.error("Alle velden zijn verplicht");
      return false;
    }
    if (!form.email.includes("@")) {
      toast.error("Ongeldig e-mailadres");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setUser(form);
    toast.success("Profiel opgeslagen");
  };

  return (
    <section className="card">
      <h2>Jouw profiel</h2>

      <form onSubmit={handleSubmit} className="form">
        <input
          name="name"
          placeholder="Naam"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Telefoon"
          value={form.phone}
          onChange={handleChange}
        />

        <button>Opslaan</button>
      </form>
    </section>
  );
}
