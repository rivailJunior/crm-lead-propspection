import { createContext } from "react";
import useUsers, { IuseUsers } from "../hooks/useUsers";

type IUsersProviderProps = {
  children: JSX.Element;
};

type IUserProvider = {
  userModel: IuseUsers;
};

const UsersContext = createContext<IUserProvider>({
  userModel: {} as IuseUsers,
});

export default function UsersProvider({ children }: IUsersProviderProps) {
  return (
    <UsersContext.Provider value={{ userModel: useUsers() }}>
      {children}
    </UsersContext.Provider>
  );
}

export { UsersContext };
