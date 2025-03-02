import { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
interface EasterEggContextType {
  count: number;
  foundEggs: Set<string>;
  findEgg: (eggId: string) => void;
}

// Create the context with default values
const EasterEggContext = createContext<EasterEggContextType | undefined>(undefined);

// Context Provider
export const EasterEggProvider = ({ children }: { children: ReactNode }) => {
  const [foundEggs, setFoundEggs] = useState<Set<string>>(new Set());

  // Function to add a found Easter egg
  const findEgg = (eggId: string) => {
    console.log(foundEggs)
    setFoundEggs((prev) => new Set(prev).add(eggId));
  };

  return (
    <EasterEggContext.Provider value={{ count: foundEggs.size, foundEggs, findEgg }}>
      {children}
    </EasterEggContext.Provider>
  );
};

// Custom Hook to use EasterEggContext
export const useEasterEgg = () => {
  const context = useContext(EasterEggContext);
  if (!context) {
    throw new Error("useEasterEgg must be used within an EasterEggProvider");
  }
  return context;
};
