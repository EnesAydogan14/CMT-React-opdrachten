# RAPPORTAGE - Debuggen en Testen (Favorite Movies List)

## 🎯 Doel
In deze opdracht heb ik een bestaande React-applicatie (Favorite Movies List) gedebugd en getest. De applicatie werkte eerst niet goed door meerdere bugs (console errors en foutieve logica). Na het oplossen van de bugs heb ik de applicatie getest aan de hand van de acceptatiecriteria en de testscenario’s.

---

## 🔧 Stap 1: Applicatie starten
- Dependencies geïnstalleerd met: `npm install`
- Applicatie gestart met: `npm run dev`
- Browser geopend en DevTools (F12) gebruikt om console errors te checken

---

## 🐛 Stap 2: Debuggen (gevonden bugs + fixes)

## Bug Fixes

### Bug 1: useState is not defined (App.jsx)
- **Probleem:** De applicatie crashte direct bij het starten. In de console stond: `useState is not defined`.
- **Oorzaak:** `useState` werd gebruikt in `App.jsx` zonder import uit React.
- **Oplossing:** `import { useState } from "react";` toegevoegd.

---

### Bug 2: useState is not defined (AddMovie.jsx)
- **Probleem:** Na het fixen van App.jsx crashte de app opnieuw. Console gaf: `useState is not defined` in `AddMovie.jsx`.
- **Oorzaak:** Ook in `AddMovie.jsx` werd `useState` gebruikt zonder import.
- **Oplossing:** `import { useState } from "react";` toegevoegd aan `AddMovie.jsx`.

---

### Bug 3: Too many re-renders (AddMovie.jsx)
- **Probleem:** De app gaf een error: `Too many re-renders. React limits the number of renders...`
- **Oorzaak:** `setMovie('')` stond buiten de submit-functie en werd tijdens het renderen uitgevoerd. Daardoor bleef React opnieuw renderen (infinite loop).
- **Oplossing:** `setMovie('')` verplaatst naar de `handleSubmit` functie, zodat het inputveld alleen leeg wordt gemaakt ná succesvol toevoegen.

---

### Bug 4: Films konden niet goed toegevoegd worden (duplicate check fout)
- **Probleem:** Films werden niet toegevoegd of er kwam een foutmelding op het verkeerde moment.
- **Oorzaak:** De duplicate-check was omgedraaid: er werd een error gegeven terwijl de film juist nog niet bestond.
- **Oplossing:** Duplicate-check logisch gemaakt: als de film al bestaat → foutmelding en niet toevoegen.

---

### Bug 5: Verkeerde state setter gebruikt (App.jsx)
- **Probleem:** Nieuwe films kwamen niet in de lijst.
- **Oorzaak:** In de code stond `setMovie(...)` terwijl de state `movies` en setter `setMovies` heet.
- **Oplossing:** Aangepast naar `setMovies([...movies, newMovie])`.

---

### Bug 6: React warning: missing key in list (MovieList.jsx)
- **Probleem:** In de console kwamen warnings over “Each child in a list should have a unique key prop”.
- **Oorzaak:** In de `.map()` werd geen `key` meegegeven aan `MovieItem`.
- **Oplossing:** `key={movie}` toegevoegd bij `MovieItem`.

---

## ✅ Stap 3: Testen met acceptatiecriteria

## Test Results

### User Story 1: Movies toevoegen aan favorietenlijst ✅ PASSED
- Invoerveld aanwezig: ✅ PASSED
- Knop aanwezig: ✅ PASSED
- Klik op knop voegt film toe: ✅ PASSED
- Film komt onder bestaande favorieten: ✅ PASSED
- Lege titel → foutmelding: ✅ PASSED
- Inputveld wordt leeg na toevoegen: ✅ PASSED

### User Story 2: Films verwijderen uit favorietenlijst ✅ PASSED
- Elke film heeft een verwijderknop: ✅ PASSED
- Klik op verwijderknop verwijdert juiste film: ✅ PASSED
- Film verdwijnt direct uit lijst: ✅ PASSED
- Geen foutmelding bij succesvol verwijderen: ✅ PASSED

### User Story 3: Duplicate films voorkomen ✅ PASSED
- Duplicate toevoegen → foutmelding “film bestaat al”: ✅ PASSED
- Duplicate wordt niet toegevoegd: ✅ PASSED
- Lijst bevat nooit duplicaten: ✅ PASSED

### User Story 4: Lege lijstmelding tonen ✅ PASSED
- Lege lijst toont tekst "No favorite movies yet. Add some!": ✅ PASSED
- Bij eerste film verdwijnt melding: ✅ PASSED
- Na verwijderen van alle films verschijnt melding opnieuw: ✅ PASSED

---

## 🧪 Test Scenario’s

### Test Scenario 1: Happy Path ✅ PASSED
1. App geopend ✅
2. "Inception" toegevoegd ✅
3. "The Matrix" toegevoegd ✅
4. Beide films zichtbaar ✅
5. "Inception" verwijderd ✅
6. Alleen "The Matrix" blijft over ✅
7. "The Matrix" verwijderd ✅
8. Lege lijstmelding verschijnt ✅

### Test Scenario 2: Error Handling ✅ PASSED
1. Lege film toevoegen → foutmelding ✅
2. "Avatar" toegevoegd ✅
3. "Avatar" opnieuw toevoegen → duplicate foutmelding ✅
4. Controle: maar één "Avatar" in lijst ✅

### Test Scenario 3: Edge Cases ✅ PASSED
1. Alleen spaties invoeren → foutmelding ✅
2. Zeer lange filmnaam toevoegen → UI blijft werken ✅
3. Speciale karakters toevoegen → werkt correct ✅

---

## ✅ Conclusie
Alle console errors en bugs zijn opgelost. Daarna heb ik de applicatie getest met de acceptatiecriteria en testscenario’s. Alle user stories zijn behaald en de app werkt zoals bedoeld: films toevoegen, verwijderen, duplicates blokkeren en lege lijstmelding tonen.

---

## 🧾 Git commits (voorbeeld)
- `fix: import useState in App`
- `fix: import useState in AddMovie`
- `fix: prevent infinite re-render in AddMovie`
- `fix: correct duplicate logic and state update`
- `fix: add key prop in MovieList`
- `test: document acceptance criteria results`
