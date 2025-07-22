// app/context/UserContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { User } from "@supabase/supabase-js";

interface UserContextType {
  user: User | null;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType>({
  user: null,
  isLoading: false,
});

interface Props {
  children: ReactNode;
  initialUser: User | null;
}

export const UserProvider = ({ children, initialUser }: Props) => {
  const [user] = useState<User | null>(initialUser);
  const [isLoading] = useState(false); // puedes manejar loading si luego agregas lógica de refresh

  return (
    <UserContext.Provider value={{ user, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
