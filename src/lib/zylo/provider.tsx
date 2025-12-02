'use client';

import { createContext, useEffect, useState, ReactNode } from 'react';
import { ZyloClient } from './client';
import { getZyloConfig } from './config';
import { ZyloContextValue, TokenStatus } from './types';

export const ZyloContext = createContext<ZyloContextValue | null>(null);

interface ZyloProviderProps {
  children: ReactNode;
}

/**
 * Zylo Provider - Initializes and provides Zylo Client to the app
 *
 * Features:
 * - Auto-boots client on mount (attempts scoped anon, falls back to env anon)
 * - Provides client instance via React context
 * - Manages loading and error states
 * - Cleans up timers on unmount
 */
export function ZyloProvider({ children }: ZyloProviderProps) {
  const [client] = useState(() => {
    try {
      const config = getZyloConfig();
      return new ZyloClient(config);
    } catch (error) {
      console.error('Failed to initialize Zylo Client:', error);
      // Don't throw - return null and handle gracefully
      return null;
    }
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [tokenStatus, setTokenStatus] = useState<TokenStatus>({
    type: 'FALLBACK_ANON',
    expiresAt: null,
    isExpired: false,
    hasSignedContext: false,
  });

  useEffect(() => {
    // If client failed to initialize, don't try to boot
    if (!client) {
      setError(new Error('Zylo Client configuration is incomplete. The app will continue without authentication.'));
      setIsLoading(false);
      return;
    }

    // Boot the client on mount
    client
      .boot()
      .then(() => {
        setTokenStatus(client.getTokenStatus());
        setIsLoading(false);
        console.log('✅ Zylo Provider: Client booted successfully');
      })
      .catch((err) => {
        console.warn('⚠️ Zylo Provider: Boot failed, continuing without authentication', err);
        // Don't block the app - just warn and continue
        setError(err);
        setIsLoading(false);
      });

    // Cleanup: clear timers on unmount
    return () => {
      if (client) {
        client.cleanup();
      }
    };
  }, [client]);

  // Update token status periodically for debugging
  useEffect(() => {
    if (!client) return;

    const interval = setInterval(() => {
      setTokenStatus(client.getTokenStatus());
    }, 10000); // Every 10 seconds

    return () => clearInterval(interval);
  }, [client]);

  // Show error state - but don't block the app, just render children
  // The error is logged to console and available in context
  // Components that need auth will handle it gracefully

  // Provide client to children
  return (
    <ZyloContext.Provider value={{ client, isLoading, error, tokenStatus }}>
      {children}
    </ZyloContext.Provider>
  );
}
