import React, { ReactNode, useState } from "react";

type UserResponsesContextType = {
  userResponses: QuizResponse[];
  setUserResponses: React.Dispatch<React.SetStateAction<QuizResponse[]>>;
};

const initialValue: UserResponsesContextType = {
  userResponses: [],
  setUserResponses: () => {},
};
export const UserResponsesContext =
  React.createContext<UserResponsesContextType>(initialValue);

interface UserResponsesContextProvider {
  children: ReactNode;
}

export default function UserResponsesProvider({
  children,
}: UserResponsesContextProvider) {
  const [userResponses, setUserResponses] = useState<QuizResponse[]>([]);

  return (
    <UserResponsesContext.Provider value={{ userResponses, setUserResponses }}>
      {children}
    </UserResponsesContext.Provider>
  );
}
