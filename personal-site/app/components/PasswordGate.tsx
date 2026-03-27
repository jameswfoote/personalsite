'use client';

import { useState, useEffect, type ReactNode } from 'react';

const PASSWORD = 'jwf';

export default function PasswordGate({ children }: { children: ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem('authenticated') === 'true') {
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      sessionStorage.setItem('authenticated', 'true');
      setAuthenticated(true);
    } else {
      setError(true);
      setInput('');
    }
  };

  if (loading) return null;

  if (authenticated) return <>{children}</>;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        zIndex: 9999,
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <h1 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px' }}>
          James Foote
        </h1>
        <input
          type="password"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError(false);
          }}
          placeholder="Enter password"
          autoFocus
          style={{
            padding: '10px 16px',
            fontSize: '14px',
            border: `1px solid ${error ? '#e00' : '#ccc'}`,
            borderRadius: '4px',
            outline: 'none',
            width: '220px',
            textAlign: 'center',
            fontFamily: 'inherit',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '8px 32px',
            fontSize: '14px',
            backgroundColor: '#000',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          Enter
        </button>
        {error && (
          <p style={{ fontSize: '13px', color: '#e00', margin: 0 }}>
            Incorrect password
          </p>
        )}
      </form>
    </div>
  );
}
