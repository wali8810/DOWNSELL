"use client";

import { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const salesData = [
  { name: 'Carlos Sousa', method: 'PIX', time: 7 },
  { name: 'Mariana Silva', method: 'cartão', time: 10 },
  { name: 'João Pereira', method: 'PIX', time: 5 },
  { name: 'Ana Costa', method: 'cartão', time: 2 },
  { name: 'Lucas Martins', method: 'boleto', time: 15 },
  { name: 'Beatriz Almeida', method: 'PIX', time: 3 },
];

export function SalesNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSale, setCurrentSale] = useState(salesData[0]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const showNotification = () => {
      const randomIndex = Math.floor(Math.random() * salesData.length);
      const randomTime = Math.floor(Math.random() * 15) + 1;
      setCurrentSale({ ...salesData[randomIndex], time: randomTime });
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 10000);
    };

    const initialTimeout = setTimeout(showNotification, 8000);
    const interval = setInterval(showNotification, Math.random() * (45000 - 30000) + 30000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-3 rounded-lg bg-card p-4 shadow-2xl border border-border">
        <CheckCircle className="h-6 w-6 text-primary" />
        <p className="text-sm text-foreground">
          <strong>{currentSale.name}</strong> comprou no {currentSale.method} há {currentSale.time} minutos
        </p>
      </div>
    </div>
  );
}
