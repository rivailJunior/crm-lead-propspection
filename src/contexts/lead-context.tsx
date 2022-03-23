import { createContext } from "react";
import useUsers, { IuseLead } from "../hooks/useLead";

type IUsersProviderProps = {
  children: JSX.Element;
};

type IUserProvider = {
  userModel: IuseLead;
};

const LeadContext = createContext<IUserProvider>({
  userModel: {} as IuseLead,
});

export default function LeadProvider({ children }: IUsersProviderProps) {
  return (
    <LeadContext.Provider value={{ userModel: useUsers() }}>
      {children}
    </LeadContext.Provider>
  );
}

export { LeadContext };
