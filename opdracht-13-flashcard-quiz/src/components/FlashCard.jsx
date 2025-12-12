import { useState } from "react";

function FlashCard({ question, answer }) {
  const [isFlipped, setIsFlipped] = useState(false);

  function handleClick() {
    setIsFlipped((prev) => !prev);
  }

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer select-none bg-white rounded-xl shadow-md p-6 flex items-center justify-center text-center transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg border border-indigo-100"
    >
     
      {isFlipped ? (
        <p className="text-lg font-semibold text-emerald-600">{answer}</p>
      ) : (
        <p className="text-lg font-semibold text-indigo-700">{question}</p>
      )}
    </div>
  );
}

export default FlashCard;
