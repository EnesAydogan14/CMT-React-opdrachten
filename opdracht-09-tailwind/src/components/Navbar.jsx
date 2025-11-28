import React from "react";

function Navbar() {
  return (
    <nav className="w-full bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700 backdrop-blur">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-brand dark:bg-brandDark text-white">
            🏝️
          </div>

          <h1 className="text-lg font-semibold text-slate-900 dark:text-white">
            Work<strong className="text-brand dark:text-brandDark">cation</strong>
          </h1>
        </div>


        <div className="hidden sm:flex items-center gap-6 text-sm text-slate-700 dark:text-slate-200">
          <a href="#" className="hover:text-brand dark:hover:text-brandDark">
            Destinations
          </a>
          <a href="#" className="hover:text-brand dark:hover:text-brandDark">
            How it works
          </a>
          <a href="#" className="hover:text-brand dark:hover:text-brandDark">
            Pricing
          </a>

          <button className="px-3 py-1.5 rounded-full bg-brand dark:bg-brandDark text-white font-medium shadow hover:brightness-110">
            Book now
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;