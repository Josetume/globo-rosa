'use client';

import { useEffect, useState } from 'react';
import { Analytics } from './Analytics';

type Consent = 'unknown' | 'accepted' | 'rejected';

const STORAGE_KEY = 'globo-rosa-analytics-consent';

export function CookieBanner() {
  const [consent, setConsent] = useState<Consent>('unknown');

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === 'accepted' || stored === 'rejected') {
        setConsent(stored);
      }
    } catch {
      // Si el navegador bloquea el almacenamiento, el banner sigue siendo usable.
    }
  }, []);

  const chooseConsent = (value: Exclude<Consent, 'unknown'>) => {
    setConsent(value);
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // La decisión visual se mantiene aunque localStorage no esté disponible.
    }
  };

  if (consent !== 'unknown') {
    return consent === 'accepted' ? <Analytics /> : null;
  }

  return (
    <aside
      className="fixed bottom-4 left-4 right-4 z-[60] mx-auto max-w-2xl rounded-2xl border border-pink-200 bg-white p-4 shadow-2xl"
      aria-label="Preferencias de cookies"
    >
      <p className="text-sm leading-6">
        Usamos cookies analíticas opcionales para mejorar la experiencia. No enviamos datos personales.
      </p>
      <div className="mt-3 flex gap-3">
        <button type="button" className="btn-primary text-sm" onClick={() => chooseConsent('accepted')}>
          Aceptar
        </button>
        <button type="button" className="btn-secondary text-sm" onClick={() => chooseConsent('rejected')}>
          Rechazar
        </button>
      </div>
    </aside>
  );
}
