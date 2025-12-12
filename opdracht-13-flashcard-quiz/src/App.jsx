import FlashCardList from "./components/FlashCardList";
import { flashcards } from "./data";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-indigo-50 to-emerald-100 py-10">
      <FlashCardList cards={flashcards} />
    </div>
  );
}

export default App;
