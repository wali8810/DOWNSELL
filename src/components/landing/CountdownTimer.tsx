"use client";

import { useState, useEffect } from 'react';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(20 * 60);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run this component on the client
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    if (timeLeft <= 0) {
      setIsVisible(false);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isVisible]);

  if (!isVisible) {
    return null;
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="mt-8 text-center">
      <p className="text-foreground/80 mb-2">Oferta disponível apenas pelos próximos minutos!</p>
      <div className="inline-block bg-primary/80 backdrop-blur-sm text-white font-bold rounded-lg px-6 py-3 shadow-lg border border-primary/50">
        <span className="text-4xl tracking-widest">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
}
