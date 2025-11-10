import React, { createContext, useContext, useState, ReactNode } from "react";

export type StorageType = "memory" | "session" | "local";

interface AppStorageContextType {
  setItem: <T>(key: string, value: T, storage?: StorageType) => void;
  getItem: <T>(key: string, storage?: StorageType) => T | null;
  removeItem: (key: string, storage?: StorageType) => void;
}

const AppStorageContext = createContext<AppStorageContextType | undefined>(
  undefined
);

export const AppStorageProvider = ({ children }: { children: ReactNode }) => {
  const [memoryStore, setMemoryStore] = useState<Record<string, any>>({});

  const setItem = <T,>(
    key: string,
    value: T,
    storage: StorageType = "memory"
  ) => {
    switch (storage) {
      case "memory":
        setMemoryStore((prev) => ({ ...prev, [key]: value }));
        break;
      case "session":
        sessionStorage.setItem(key, JSON.stringify(value));
        break;
      case "local":
        localStorage.setItem(key, JSON.stringify(value));
        break;
    }
  };

  const getItem = <T,>(key: string, storage: StorageType = "memory"): T | null => {
    switch (storage) {
      case "memory":
        return (memoryStore[key] ?? null) as T | null;
      case "session": {
        const item = sessionStorage.getItem(key);
        return item ? (JSON.parse(item) as T) : null;
      }
      case "local": {
        const item = localStorage.getItem(key);
        return item ? (JSON.parse(item) as T) : null;
      }
      default:
        return null;
    }
  };

  const removeItem = (key: string, storage: StorageType = "memory") => {
    switch (storage) {
      case "memory":
        setMemoryStore((prev) => {
          const copy = { ...prev };
          delete copy[key];
          return copy;
        });
        break;
      case "session":
        sessionStorage.removeItem(key);
        break;
      case "local":
        localStorage.removeItem(key);
        break;
    }
  };

  return (
    <AppStorageContext.Provider value={{ setItem, getItem, removeItem }}>
      {children}
    </AppStorageContext.Provider>
  );
};

export const useAppStorage = () => {
  const context = useContext(AppStorageContext);
  if (!context) {
    throw new Error("useAppStorage must be used within AppStorageProvider");
  }
  return context;
};
