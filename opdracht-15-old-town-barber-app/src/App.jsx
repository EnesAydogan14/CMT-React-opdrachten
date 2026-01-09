import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getFromStorage, saveToStorage } from "./utils/localStorage";
import { useState } from "react";
import UserProfile from "./components/UserProfile";
import ShopInfo from "./components/ShopInfo";
import BookingForm from "./components/BookingForm";
import BookingsList from "./components/BookingsList";

function App() {
  const [user, setUser] = useState(() => getFromStorage("userProfile", null));
  const [bookings, setBookings] = useState(() => getFromStorage("appointments", []));

  useEffect(() => {
    saveToStorage("userProfile", user);
  }, [user]);

  useEffect(() => {
    saveToStorage("appointments", bookings);
  }, [bookings]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      const updated = bookings.map(b => {
        const diff = (new Date(b.date) - now) / 60000;
        if (diff <= 15 && diff > 0 && !b.reminded) {
          toast.info(`Reminder: ${b.service} over ${Math.ceil(diff)} min`);
          return { ...b, reminded: true };
        }
        return b;
      });

      setBookings(updated);
    }, 60000);

    return () => clearInterval(interval);
  }, [bookings]);

  return (
    <>
      <ShopInfo />
      <UserProfile user={user} setUser={setUser} />
      <BookingForm user={user} bookings={bookings} setBookings={setBookings} />
      <BookingsList bookings={bookings} />

      <ToastContainer position="bottom-right" />
    </>
  );
}

export default App;

