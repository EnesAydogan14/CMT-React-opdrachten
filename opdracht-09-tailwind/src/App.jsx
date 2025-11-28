import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <Navbar />

      <main className="flex items-center justify-center px-4 py-10">
        <div className="flex flex-col items-center">
        
          <section className="max-w-md w-full bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden">
      
            <img
              className="w-full h-56 object-cover"
              src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Person working on laptop at the beach"
            />

   
            <div className="p-8">
              <h2 className="text-2xl font-bold leading-snug text-slate-900 dark:text-white">
                You can work from anywhere.{" "}
                <strong className="text-brand dark:text-brandDark">
                  Take advantage of it.
                </strong>
              </h2>

              <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Workcation helps you find work-friendly rentals in beautiful
                locations so you can enjoy some nice weather even when you're
                not on vacation.
              </p>

              <button className="mt-6 w-full py-3 rounded-lg bg-brand dark:bg-brandDark text-white text-xs font-semibold tracking-wide shadow-md hover:brightness-110">
                BOOK YOUR ESCAPE
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;