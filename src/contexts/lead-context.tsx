import { createContext } from "react";
import useUsers, { IuseLead } from "../hooks/useLead";

type ILeadProviderProps = {
  children: JSX.Element;
};

type ILeadProvider = {
  userModel: IuseLead;
};

const LeadContext = createContext<ILeadProvider>({
  userModel: {} as IuseLead,
});

export default function LeadProvider({ children }: ILeadProviderProps) {
  return (
    <LeadContext.Provider value={{ userModel: useUsers() }}>
      {children}
    </LeadContext.Provider>
  );
}

export { LeadContext };
