import { createContext } from "react";
import useUsers, { IuseUsers } from "../hooks/useUsers";

type IUsersProviderProps = {
  children: JSX.Element;
};

type IUserProvider = {
  userModel: IuseUsers;
};

const LeadContext = createContext<IUserProvider>({
  userModel: {} as IuseUsers,
});

export default function LeadProvider({ children }: IUsersProviderProps) {
  return (
    <LeadContext.Provider value={{ userModel: useUsers() }}>
      {children}
    </LeadContext.Provider>
  );
}

export { LeadContext };
