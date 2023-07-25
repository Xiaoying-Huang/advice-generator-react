import { useState } from "react";
export default function App() {
  const [advice, setAdvice] = useState("");
  const [adviceCount, setAdviceCount] = useState(0);
  const [previousAdvice, setPreviousAdvice] = useState("");
  async function getAdivce() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json()
    const newAdvice = data.slip.advice;
    if (newAdvice !== previousAdvice) {
      setAdvice(newAdvice);
      setPreviousAdvice(newAdvice);
      setAdviceCount((currentCount) => currentCount + 1);
    } else {
      getAdivce();
    }

  }
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdivce}>Get advice</button>
      <p>You have read {adviceCount} pieces of advice.</p>
    </div>
  );
}
