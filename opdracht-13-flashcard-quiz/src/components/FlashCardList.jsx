import FlashCard from "./FlashCard";

function FlashCardList({ cards }) {
  return (
    <div className="max-w-5xl mx-auto mt-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-indigo-700">
        Hoofdsteden Flashcard Quiz 🌍
      </h1>
      <p className="text-center text-slate-600 mb-8">
        Klik op een kaart om het antwoord (de hoofdstad) te zien. Klik nog een keer om weer de vraag te zien.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cards.map((card) => (
          <FlashCard
            key={card.id}
            question={card.question}
            answer={card.answer}
          />
        ))}
      </div>
    </div>
  );
}

export default FlashCardList;
