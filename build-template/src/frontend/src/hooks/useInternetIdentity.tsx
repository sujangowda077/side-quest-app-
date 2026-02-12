import React, { createContext, useContext, useEffect, useState } from "react";
import { AuthClient } from "@dfinity/auth-client";
import { Principal } from "@dfinity/principal";

type IdentityContextType = {
  isAuthenticated: boolean;
  principal: Principal | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
};

const IdentityContext = createContext<IdentityContextType | null>(null);

export const InternetIdentityProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [authClient, setAuthClient] = useState<AuthClient | null>(null);
  const [principal, setPrincipal] = useState<Principal | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const init = async () => {
      const client = await AuthClient.create();
      setAuthClient(client);

      const loggedIn = await client.isAuthenticated();
      setIsAuthenticated(loggedIn);

      if (loggedIn) {
        const identity = client.getIdentity();
        setPrincipal(identity.getPrincipal());
      }
    };

    init();
  }, []);

  const login = async () => {
    if (!authClient) return;

    await authClient.login({
      identityProvider:
        process.env.DFX_NETWORK === "local"
          ? "http://localhost:4943?canisterId=rdmx6-jaaaa-aaaaa-aaadq-cai"
          : "https://identity.ic0.app",
      onSuccess: async () => {
        const identity = authClient.getIdentity();
        setPrincipal(identity.getPrincipal());
        setIsAuthenticated(true);
      },
    });
  };

  const logout = async () => {
    if (!authClient) return;
    await authClient.logout();
    setPrincipal(null);
    setIsAuthenticated(false);
  };

  return (
    <IdentityContext.Provider
      value={{ isAuthenticated, principal, login, logout }}
    >
      {children}
    </IdentityContext.Provider>
  );
};

export const useInternetIdentity = () => {
  const context = useContext(IdentityContext);
  if (!context) {
    throw new Error("useInternetIdentity must be used within InternetIdentityProvider");
  }
  return context;
};
