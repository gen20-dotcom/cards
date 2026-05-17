import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

const modes = {
  beginner: {
    title: "Beginner Body Deck",
    label: "Beginner",
    button: "Draw Beginner Card",
    roadwork: "Before deck: 5 min brisk walk or light march",
    restRule: "Rest 90–120 sec after every 13 cards",
    microRest: "Optional 20 sec between cards",
    suits: [
      {
        name: "Hearts",
        symbol: "♥",
        color: "text-red-600",
        exercise: "Push-ups",
        muscle: "Upper body strength",
        instruction: "Use knee push-ups if needed. Clean reps only.",
      },
      {
        name: "Diamonds",
        symbol: "♦",
        color: "text-red-600",
        exercise: "Squats",
        muscle: "Leg strength",
        instruction: "Control down, stand tall. Clean reps only.",
      },
      {
        name: "Clubs",
        symbol: "♣",
        color: "text-slate-900",
        exercise: "Sit-ups",
        muscle: "Core strength and endurance",
        instruction: "Use crunches if needed. Don’t pull your neck.",
      },
      {
        name: "Spades",
        symbol: "♠",
        color: "text-slate-900",
        exercise: "Burpees",
        muscle: "Full-body toughness and conditioning",
        instruction: "Use step burpees if needed. Keep moving.",
      },
    ],
    ranks: [
      { label: "A", reps: 5, modifier: "After reps: 10 sec wall sit." },
      { label: "2", reps: 2, modifier: "Clean reps only." },
      { label: "3", reps: 3, modifier: "Clean reps only." },
      { label: "4", reps: 4, modifier: "Clean reps only." },
      { label: "5", reps: 5, modifier: "Clean reps only." },
      { label: "6", reps: 5, modifier: "Clean reps only." },
      { label: "7", reps: 6, modifier: "Clean reps only." },
      { label: "8", reps: 6, modifier: "Clean reps only." },
      { label: "9", reps: 7, modifier: "Clean reps only." },
      { label: "10", reps: 7, modifier: "Clean reps only." },
      { label: "J", reps: 8, modifier: "After reps: 10 sec plank." },
      { label: "Q", reps: 8, modifier: "After reps: 10 sec glute bridge hold." },
      { label: "K", reps: 10, modifier: "After reps: 10 sec hollow hold." },
    ],
  },
  intermediate: {
    title: "Intermediate Body Deck",
    label: "Intermediate",
    button: "Draw Intermediate Card",
    roadwork: "Before deck: 10 min jog, fast walk, or skipping",
    restRule: "Rest 60–90 sec after every 13 cards",
    microRest: "Optional 15 sec between cards",
    suits: [
      {
        name: "Hearts",
        symbol: "♥",
        color: "text-red-600",
        exercise: "Push-ups",
        muscle: "Upper body strength",
        instruction: "Chest down, full lockout. No half reps.",
      },
      {
        name: "Diamonds",
        symbol: "♦",
        color: "text-red-600",
        exercise: "Squats",
        muscle: "Leg strength",
        instruction: "Control down, stand tall, reset.",
      },
      {
        name: "Clubs",
        symbol: "♣",
        color: "text-slate-900",
        exercise: "Sit-ups",
        muscle: "Core strength and endurance",
        instruction: "Controlled full reps. Don’t throw your body.",
      },
      {
        name: "Spades",
        symbol: "♠",
        color: "text-slate-900",
        exercise: "Burpees",
        muscle: "Full-body toughness and conditioning",
        instruction: "Full body down, stand or jump up. Keep moving.",
      },
    ],
    ranks: [
      { label: "A", reps: 11, modifier: "After reps: 20 sec plank." },
      { label: "2", reps: 2, modifier: "Clean reps only." },
      { label: "3", reps: 3, modifier: "Clean reps only." },
      { label: "4", reps: 4, modifier: "Clean reps only." },
      { label: "5", reps: 5, modifier: "Clean reps only." },
      { label: "6", reps: 6, modifier: "Clean reps only." },
      { label: "7", reps: 7, modifier: "Clean reps only." },
      { label: "8", reps: 8, modifier: "Clean reps only." },
      { label: "9", reps: 9, modifier: "Clean reps only." },
      { label: "10", reps: 10, modifier: "Clean reps only." },
      { label: "J", reps: 10, modifier: "After reps: 20 sec wall sit." },
      { label: "Q", reps: 10, modifier: "After reps: 20 sec hollow hold." },
      { label: "K", reps: 10, modifier: "After reps: 20 sec high knees." },
    ],
  },
  tyson: {
    title: "Tyson Body Deck",
    label: "Tyson",
    button: "Draw Tyson Card",
    roadwork: "Before deck: 20 min run, fast walk, or skipping",
    restRule: "Rest 45–60 sec after every 13 cards",
    microRest: "Micro-rest under 10 sec if needed",
    suits: [
      {
        name: "Hearts",
        symbol: "♥",
        color: "text-red-600",
        exercise: "Push-ups",
        muscle: "Upper body strength",
        instruction: "Strict reps. Chest low, elbows controlled, lockout strong.",
      },
      {
        name: "Diamonds",
        symbol: "♦",
        color: "text-red-600",
        exercise: "Squats",
        muscle: "Leg strength",
        instruction: "Control down, stand tall, keep the pace hard.",
      },
      {
        name: "Clubs",
        symbol: "♣",
        color: "text-slate-900",
        exercise: "Sit-ups",
        muscle: "Core strength and endurance",
        instruction: "Full reps. Keep the pace hard but controlled.",
      },
      {
        name: "Spades",
        symbol: "♠",
        color: "text-slate-900",
        exercise: "Burpees",
        muscle: "Full-body toughness and conditioning",
        instruction: "Hard card. Down, up, jump. Don’t cheat the rep.",
      },
    ],
    ranks: [
      { label: "A", reps: 15, modifier: "After reps: 30 sec plank." },
      { label: "2", reps: 2, modifier: "Hard clean reps." },
      { label: "3", reps: 3, modifier: "Hard clean reps." },
      { label: "4", reps: 4, modifier: "Hard clean reps." },
      { label: "5", reps: 5, modifier: "Hard clean reps." },
      { label: "6", reps: 6, modifier: "Hard clean reps." },
      { label: "7", reps: 7, modifier: "Hard clean reps." },
      { label: "8", reps: 8, modifier: "Hard clean reps." },
      { label: "9", reps: 9, modifier: "Hard clean reps." },
      { label: "10", reps: 10, modifier: "Hard clean reps." },
      { label: "J", reps: 11, modifier: "After reps: 30 sec wall sit." },
      { label: "Q", reps: 12, modifier: "After reps: 30 sec hollow hold." },
      { label: "K", reps: 13, modifier: "After reps: 30 sec high knees." },
    ],
  },
};

function buildDeck(mode) {
  const normalCards = modes[mode].suits.flatMap((suit) =>
    modes[mode].ranks.map((rank) => ({
      type: "normal",
      rank: rank.label,
      reps: rank.reps,
      modifier: rank.modifier,
      suit: suit.name,
      symbol: suit.symbol,
      color: suit.color,
      exercise: suit.exercise,
      muscle: suit.muscle,
      instruction: suit.instruction,
      label: `${rank.label} of ${suit.name}`,
    }))
  );

  const startJoker = {
    type: "joker",
    rank: "Start",
    reps: mode === "beginner" ? 5 : mode === "intermediate" ? 10 : 20,
    modifier:
      mode === "beginner"
        ? "5 min brisk walk or light jog. Warm up your body first."
        : mode === "intermediate"
        ? "10 min jog, fast walk, or skipping. Build your engine."
        : "20 min run, fast walk, or skipping. No shortcut. Build the gas tank.",
    suit: "Start Joker",
    symbol: "★",
    color: "text-slate-950",
    exercise: "Roadwork / Running",
    muscle: "Start phase: stamina, lungs, legs, discipline",
    instruction: "Do this first before the card workout. This is the engine builder.",
    label: "Start Joker",
  };

  const endJoker = {
    type: "joker",
    rank: "Final",
    reps: mode === "beginner" ? 20 : mode === "intermediate" ? 30 : 45,
    modifier:
      mode === "beginner"
        ? "10 sec front neck press + 10 sec towel grip hold."
        : mode === "intermediate"
        ? "15 sec front neck press + 15 sec towel grip hold."
        : "20 sec front neck press + 25 sec towel grip hold. No neck bridges.",
    suit: "End Joker",
    symbol: "☠",
    color: "text-slate-950",
    exercise: "Neck Isometric + Grip Hold",
    muscle: "Final missing part: neck, traps, grip, posture",
    instruction: "End punishment. Press head gently into your hand, then crush a towel grip.",
    label: "End Joker",
  };

  return [startJoker, ...normalCards, endJoker];
}

function drawRandomCard(remainingDeck, forceFirstCard = false) {
  const hasFinalJokerWaiting = remainingDeck.length > 1;
  const randomLimit = hasFinalJokerWaiting ? remainingDeck.length - 1 : remainingDeck.length;
  const index = forceFirstCard ? 0 : Math.floor(Math.random() * randomLimit);
  const selectedCard = remainingDeck[index];
  const updatedDeck = remainingDeck.filter((_, cardIndex) => cardIndex !== index);

  return { selectedCard, updatedDeck };
}

export default function App() {
  const [mode, setMode] = useState("beginner");
  const fullDeck = useMemo(() => buildDeck(mode), [mode]);
  const [remainingDeck, setRemainingDeck] = useState(() => buildDeck("beginner"));
  const [card, setCard] = useState(null);
  const drawCount = fullDeck.length - remainingDeck.length;
  const isDeckFinished = remainingDeck.length === 0;
  const currentMode = modes[mode];

  function changeMode(nextMode) {
    setMode(nextMode);
    setRemainingDeck(buildDeck(nextMode));
    setCard(null);
  }

  function drawCard() {
    if (isDeckFinished) return;

    const { selectedCard, updatedDeck } = drawRandomCard(remainingDeck, drawCount === 0);
    setCard(selectedCard);
    setRemainingDeck(updatedDeck);
  }

  function resetDeck() {
    setRemainingDeck(fullDeck);
    setCard(null);
  }

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-3 overflow-hidden">
      <section className="w-full max-w-md min-h-[100dvh] flex flex-col items-center justify-center gap-7 py-3">
        <div className="w-[300px] rounded-[2rem] bg-white p-2 border border-slate-300">
          <div className="flex items-center gap-2">
            <div className="flex flex-1 gap-2">
              {Object.entries(modes).map(([key, item]) => (
                <button
                  key={key}
                  onClick={() => changeMode(key)}
                  className={`flex-1 px-2 py-2 rounded-[1.5rem] text-[11px] font-bold transition ${
                    mode === key
                      ? "bg-slate-950 text-white"
                      : "bg-slate-100 text-slate-600 active:scale-95"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="min-w-[72px] text-center">
              <p className="text-[10px] text-slate-500">Done</p>
              <p className="text-base font-bold text-slate-950">{drawCount} / 54</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <motion.div
            key={card ? card.label + drawCount + mode : "empty-card" + mode}
            initial={{ rotateY: 90, opacity: 0, scale: 0.95 }}
            animate={{ rotateY: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.35 }}
            className="relative h-[390px] w-[300px] rounded-[2rem] bg-white border border-slate-300 p-5 overflow-hidden"
          >
            {card ? (
              <>
                <div className={`absolute top-6 left-6 ${card.color}`}>
                  <p className="text-5xl font-black leading-none">{card.rank}</p>
                  <p className="text-5xl leading-none">{card.symbol}</p>
                </div>

                <div className={`absolute top-6 right-6 text-right ${card.color}`}>
                  <p className="text-4xl font-black leading-none">{card.reps}</p>
                  <p className="text-xs font-bold uppercase tracking-wide">reps</p>
                </div>

                <div className="h-full flex flex-col items-center justify-center text-center px-3 pt-8">
                  <p className={`text-5xl leading-none mb-3 ${card.color}`}>{card.symbol}</p>
                  <p className={`text-2xl font-black leading-tight ${card.color}`}>{card.exercise}</p>
                  <p className={`mt-3 text-5xl font-black ${card.color}`}>{card.reps}</p>
                </div>

                <div className={`absolute bottom-6 right-6 rotate-180 ${card.color}`}>
                  <p className="text-5xl font-black leading-none">{card.rank}</p>
                  <p className="text-5xl leading-none">{card.symbol}</p>
                </div>
              </>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center px-8">
                <p className="text-3xl font-black text-slate-900">{currentMode.title}</p>
              </div>
            )}
          </motion.div>
        </div>

        <div className="flex justify-center w-[300px]">
          <button
            onClick={isDeckFinished ? resetDeck : drawCard}
            className="w-full h-16 rounded-[2rem] px-6 text-lg font-semibold bg-slate-950 text-white border border-slate-300 active:scale-95 transition"
          >
            {isDeckFinished ? "Reset Deck" : currentMode.button}
          </button>
        </div>
      </section>
    </main>
  );
}
